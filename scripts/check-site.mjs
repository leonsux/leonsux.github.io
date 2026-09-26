import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? walk(path.join(directory, entry.name))
          : path.join(directory, entry.name),
      ),
    )
  ).flat();
}
const pages = (await walk(root)).filter((file) => file.endsWith('.html'));
const errors = [];
let checkedLinks = 0;
const exists = async (file) => {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
};
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const name = path.relative(root, file);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1)
    errors.push(`${name}: expected one h1`);
  if (!html.includes('rel="canonical"'))
    errors.push(`${name}: missing canonical`);
  if (!html.includes('property="og:image"'))
    errors.push(`${name}: missing OG image`);
  if (!html.includes('name="description"'))
    errors.push(`${name}: missing description`);
  for (const match of html.matchAll(
    /<(?:a|img|link|script)\b[^>]*?\b(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1].replaceAll('&amp;', '&');
    if (url.startsWith('//')) continue;
    let target;
    try {
      target = path.join(root, decodeURIComponent(url));
    } catch {
      errors.push(`${name}: invalid URL ${url}`);
      continue;
    }
    checkedLinks++;
    if (
      !(await exists(target)) &&
      !(await exists(path.join(target, 'index.html')))
    )
      errors.push(`${name}: missing local target ${url}`);
  }
}
for (const route of [
  'now/index.html',
  'projects/index.html',
  'posts/index.html',
  'about/index.html',
  'feed.xml',
  'sitemap-index.xml',
  'robots.txt',
]) {
  if (!(await exists(path.join(root, route))))
    errors.push(`Missing output: ${route}`);
}
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `已验证 ${pages.length} 个 HTML 页面的基础 SEO、标题层级和 ${checkedLinks} 个站内资源／页面引用。`,
  );
