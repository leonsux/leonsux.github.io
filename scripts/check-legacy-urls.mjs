import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const manifest = JSON.parse(await readFile(path.join(root, 'scripts/legacy-urls.json'), 'utf8'));
const urls = [
  ...manifest.pages,
  ...manifest.posts.map(({ permalink }) => permalink),
  ...manifest.sourceOnly.map(({ plannedPermalink }) => plannedPermalink),
];

function outputPath(url) {
  const pathname = decodeURI(new URL(url, manifest.site).pathname);

  if (pathname === '/') return path.join(root, 'dist/index.html');
  if (path.extname(pathname)) return path.join(root, 'dist', pathname);

  return path.join(root, 'dist', pathname, 'index.html');
}

const missing = [];

for (const url of urls) {
  try {
    await access(outputPath(url));
  } catch {
    missing.push(url);
  }
}

if (missing.length > 0) {
  console.error(`缺少 ${missing.length} 个兼容地址：`);
  missing.forEach((url) => console.error(`- ${url}`));
  process.exitCode = 1;
} else {
  console.log(`已验证 ${urls.length} 个历史及迁移地址。`);
}
