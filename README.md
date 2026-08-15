# leonsux.github.io

leonsux 的个人网站与技术博客，使用 Astro、TypeScript 和原生 CSS 构建，目标托管平台为 GitHub Pages。

线上地址：[https://leonsux.github.io](https://leonsux.github.io)

## 本地开发

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

生产构建与验证：

```bash
npm run build
npm run verify:urls
npm run preview
```

## 内容与路由

- 文章位于 `src/content/blog/`，字段由 `src/content.config.ts` 校验。
- 旧博客已经公开的文章 URL 继续保留；兼容清单位于 `scripts/legacy-urls.json`。
- 新文章建议使用 `/posts/<slug>/` 形式的永久链接。
- `npm run verify:urls` 会检查构建产物中是否存在全部历史及迁移地址。

## 项目状态

Astro 重构版本已经通过 GitHub Actions 发布到 GitHub Pages。远端默认分支为没有旧模板父提交的 `main`，旧 `master` 仅作为备份保留；giscus 评论、历史 URL 兼容和旧 Jekyll 清理均已完成。实际进度以 [ROADMAP.md](./ROADMAP.md) 为准。
