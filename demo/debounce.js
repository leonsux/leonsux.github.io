const debounce = (fn, time) => {
  let timer = null;
  const _debounce = (...arg) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...arg);
      clearTimeout(timer);
      timer = null;
    }, time);
  }

  return _debounce;
}
