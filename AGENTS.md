# AGENTS.md

## 项目定位

这是 leonsux 的个人网站与技术博客，面向个人品牌展示、技术写作和项目沉淀。站点使用 Astro 静态生成，并托管在 GitHub Pages。

## 当前技术决策

- 使用 Astro、TypeScript 和原生 CSS。
- 默认输出静态 HTML，不为纯展示内容添加客户端 JavaScript。
- 不引入 React、Tailwind、CMS、站内搜索、PWA 或统计系统，除非需求明确并单独确认。
- 评论系统使用 giscus，不在客户端保存 OAuth Secret。
- 使用 GitHub Pages 托管；CI/CD 配置和公开部署必须单独确认。

## 目录约定

- `src/components/`：可复用的 Astro 展示组件。
- `src/layouts/`：页面与文章布局。
- `src/pages/`：站点路由。
- `src/content/blog/`：文章 Markdown 源文件。
- `src/styles/`：全局设计变量和基础样式。
- `public/`：无需构建处理的静态资源。
- `scripts/`：构建或迁移验证脚本；一次性任务不创建多余抽象。
- 旧 Jekyll 文件已在迁移验证后清理；历史内容以 `src/content/blog/` 和 `scripts/legacy-urls.json` 为准。

## 内容规范

文章只使用以下必要字段：

- `title`
- `description`
- `publishedAt`
- `updatedAt`，可选
- `tags`
- `draft`
- `featured`
- `permalink`
- `cover`，可选
- `legacy`

历史文章必须保留现有公开 URL。新文章默认使用 `/posts/<slug>/`。不要根据标题或日期静默改变已经发布的永久链接。

## 页面与设计规范

- 默认视觉为暖白、深灰和电光蓝组成的编辑型技术博客。
- 首页优先表达作者身份、当前关注和精选内容，不使用占据大部分首屏的装饰性 Hero。
- 中文正文阅读宽度控制在约 `68–72ch`。
- 所有交互具备键盘焦点状态；颜色满足可读性要求；尊重 `prefers-reduced-motion`。
- 使用系统字体栈和 Astro 内置代码高亮，不依赖外部字体、图标字体或代码高亮 CDN。
- 不虚构项目、经历、统计数据、推荐语或文章内容。

## 兼容与安全

- 迁移期间维护一份现有 URL 清单，并在构建后逐项验证。
- 旧 Service Worker 必须先通过自注销版本清理注册和缓存，不能直接删除后视为完成。
- 不提交密钥、Token、OAuth Secret、`.env` 或个人访问凭据。
- 外部脚本默认不引入；确需引入时必须固定来源并说明用途。
- Git 历史改写、强制推送、默认分支变更、删除旧文件、CI/CD 修改和公开部署均需单独确认。

## 工程规范

- 只实现已确认范围，不顺手重构无关内容。
- 优先使用 Astro 组件和原生 Web 能力，避免为少量代码引入依赖。
- 修改后依次执行适用的检查：`npm run check`、`npm run build`、历史 URL 验证和本地页面检查。
- 未验证的事项不得写入 `ROADMAP.md` 的“已完成”。
- 每次完成开发、修复或重要文档变更后同步更新 `ROADMAP.md`。

## Git 约定

- 当前生产分支为 `master`，本次重构使用 `codex/astro-rebuild`。
- 本任务不顺带更改默认分支；如需迁移到 `main`，另行确认远端影响。
- Commit 信息使用中文，格式遵循全局规范。
