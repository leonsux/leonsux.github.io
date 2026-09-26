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
- 首页展示的作者介绍、项目、导航和 Now 近况分别由 `src/data/profile.ts`、`src/data/projects.ts`、`src/data/site.ts` 和 `src/data/now.ts` 提供。
- 近况页面位于 `/now/`；站点图片和项目插画位于 `public/images/garden/`，素材来源与替换说明见该目录的 README。
- 旧博客已经公开的文章 URL 继续保留；兼容清单位于 `scripts/legacy-urls.json`。
- 新文章建议使用 `/posts/<slug>/` 形式的永久链接。
- `npm run verify:urls` 会检查构建产物中是否存在全部历史及迁移地址。
- `npm run verify:site` 会检查构建页面的基础 SEO 元信息、标题层级和站内资源引用。

## 项目状态

生产站点继续由 `main` 分支上的 GitHub Actions 发布；本地重构在 `redesign/personal-site-v2` 分支完成验证。实际进度及待补素材以 [ROADMAP.md](./ROADMAP.md) 为准。
