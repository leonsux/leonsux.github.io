export {};
const root = document.documentElement;
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');
let savedTheme: string | null = null;
try {
  savedTheme = localStorage.getItem('leon-theme');
} catch {
  /* Storage may be disabled. */
}
let themeTimer: ReturnType<typeof setTimeout>;
function setTheme(theme: 'light' | 'dark', animate = false) {
  if (animate) {
    root.classList.add('theme-changing');
    clearTimeout(themeTimer);
    themeTimer = setTimeout(() => root.classList.remove('theme-changing'), 320);
  }
  root.dataset.theme = theme;
  themeButton?.setAttribute(
    'aria-label',
    theme === 'dark' ? '切换为浅色模式' : '切换为深色模式',
  );
  themeButton?.setAttribute('aria-pressed', String(theme === 'dark'));
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#1b231e' : '#f3eee4');
  document
    .querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    ?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app',
    );
}
setTheme(
  savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : systemTheme.matches
      ? 'dark'
      : 'light',
);
if (themeButton) {
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    savedTheme = nextTheme;
    setTheme(nextTheme, true);
    try {
      localStorage.setItem('leon-theme', savedTheme);
    } catch {
      /* Keep the session preference. */
    }
  });
}
systemTheme.addEventListener('change', () => {
  if (savedTheme !== 'light' && savedTheme !== 'dark')
    setTheme(systemTheme.matches ? 'dark' : 'light', true);
});

// A lazy comment frame may load after the reader has already changed the theme.
const commentContainer = document.querySelector('.giscus');
if (commentContainer) {
  const bindCommentTheme = () => {
    const frame = commentContainer.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    );
    if (!frame) return;
    const sync = () =>
      frame.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: root.dataset.theme } } },
        'https://giscus.app',
      );
    frame.addEventListener('load', sync);
    sync();
    commentObserver.disconnect();
  };
  const commentObserver = new MutationObserver(bindCommentTheme);
  commentObserver.observe(commentContainer, { childList: true, subtree: true });
  bindCommentTheme();
}

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-navigation');
function closeMenu(returnFocus = false) {
  navigation?.removeAttribute('data-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (returnFocus) menuButton?.focus();
}
if (menuButton && navigation) {
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.toggleAttribute('data-open', open);
    if (open) navigation.querySelector<HTMLAnchorElement>('a')?.focus();
  });
  navigation.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.hasAttribute('data-open'))
      closeMenu(true);
  });
  document.addEventListener('click', (event) => {
    if (!(event.target as Element).closest('.site-header')) closeMenu();
  });
  matchMedia('(max-width: 48rem)').addEventListener('change', () =>
    closeMenu(),
  );
}
root.classList.add('js');

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia(
  '(hover: hover) and (pointer: fine) and (min-width: 48.01rem)',
);
const device = navigator as Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};
const lowPower =
  (device.hardwareConcurrency > 0 && device.hardwareConcurrency <= 2) ||
  (device.deviceMemory !== undefined && device.deviceMemory <= 2) ||
  device.connection?.saveData;
let stopMotion = () => {};
function configureMotion() {
  stopMotion();
  document
    .querySelectorAll('.reveal-active')
    .forEach((element) => element.classList.remove('reveal-active'));
  if (reduced.matches || lowPower) return;
  const controller = new AbortController();
  const options = { signal: controller.signal, passive: true };
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll('[data-reveal]')
    .forEach((element) => observer.observe(element));
  const cleanups: Array<() => void> = [];
  if (finePointer.matches) {
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.setAttribute('aria-hidden', 'true');
    document.body.append(ring);
    let cursorFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    document.addEventListener(
      'pointermove',
      (event) => {
        if (event.pointerType !== 'mouse') return;
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!cursorFrame)
          cursorFrame = requestAnimationFrame(() => {
            ring.style.transform = `translate(${pointerX - 12}px, ${pointerY - 12}px)`;
            ring.style.opacity = '.55';
            cursorFrame = 0;
          });
      },
      options,
    );
    document.documentElement.addEventListener(
      'pointerleave',
      () => {
        cancelAnimationFrame(cursorFrame);
        cursorFrame = 0;
        ring.style.opacity = '0';
      },
      options,
    );
    cleanups.push(() => {
      cancelAnimationFrame(cursorFrame);
      ring.remove();
    });
    document
      .querySelectorAll<HTMLElement>(
        '[data-tilt], [data-magnetic], [data-parallax]',
      )
      .forEach((element) => {
        let frame = 0;
        let x = 0;
        let y = 0;
        const layers = element.querySelectorAll<HTMLElement>(
          '[data-parallax-layer]',
        );
        const reset = () => {
          cancelAnimationFrame(frame);
          frame = 0;
          [
            '--tilt-x',
            '--tilt-y',
            '--light-x',
            '--light-y',
            'translate',
          ].forEach((name) => element.style.removeProperty(name));
          layers.forEach((layer) => {
            layer.style.removeProperty('--px');
            layer.style.removeProperty('--py');
          });
        };
        element.addEventListener(
          'pointermove',
          (event) => {
            if (event.pointerType !== 'mouse') return;
            const box = element.getBoundingClientRect();
            x = (event.clientX - box.left) / box.width - 0.5;
            y = (event.clientY - box.top) / box.height - 0.5;
            if (!frame)
              frame = requestAnimationFrame(() => {
                if (element.hasAttribute('data-tilt')) {
                  element.style.setProperty('--tilt-x', `${-y * 4}deg`);
                  element.style.setProperty('--tilt-y', `${x * 4}deg`);
                }
                if (element.hasAttribute('data-magnetic')) {
                  element.style.translate = `${x * 7}px ${y * 7}px`;
                  element.style.setProperty('--light-x', `${(x + 0.5) * 100}%`);
                  element.style.setProperty('--light-y', `${(y + 0.5) * 100}%`);
                }
                layers.forEach((layer) => {
                  const depth = Number(layer.dataset.parallaxLayer) || 1;
                  layer.style.setProperty('--px', `${x * 8 * depth}px`);
                  layer.style.setProperty('--py', `${y * 8 * depth}px`);
                });
                frame = 0;
              });
          },
          options,
        );
        element.addEventListener('pointerleave', reset, options);
        cleanups.push(reset);
      });
  }
  stopMotion = () => {
    controller.abort();
    observer.disconnect();
    cleanups.forEach((cleanup) => cleanup());
  };
}
configureMotion();
reduced.addEventListener('change', configureMotion);
finePointer.addEventListener('change', configureMotion);
