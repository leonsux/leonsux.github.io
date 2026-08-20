# ROADMAP

## 项目目标

将现有 Jekyll/Hux 博客重构为 Astro 静态站点，继续托管于 GitHub Pages，并完成个人品牌、内容结构、性能、安全和可维护性升级。

## 当前阶段

- 状态：Astro 重构版本已发布到 GitHub Pages。
- 日期：2026-08-16。
- 当前工作：进行发布后观察与最终浏览器验收。
- 当前生产分支：无旧父提交的 `main`。
- 恢复分支：远端 `master` 与本地 `codex/astro-rebuild` 继续保留，不参与当前贡献者统计。

## 现状基线

- 现有技术栈：Jekyll、Hux Blog、Bootstrap 3、jQuery、Less、Grunt。
- 文章源文件：25 篇，其中线上已发布 24 篇，另有 1 篇因文件名不符合 Jekyll 规则而未进入线上文章目录。
- 最新文章日期：2022-06-14。
- 最近仓库提交日期：2024-04-30。
- 线上地址：`https://leonsux.github.io/`。
- 已发现问题：Gitalk OAuth Secret 公开、Universal Analytics 已失效、旧 Service Worker 长期缓存、第三方脚本过多、缺少部分本地资源、站点定位和内容首页过时。

## 已完成

- [x] 只读检查仓库结构、主要模板、线上页面和移动端布局。
- [x] 确认采用 Astro＋TypeScript＋GitHub Pages 的重构路线。
- [x] 确认原生 CSS、默认零客户端 JavaScript、giscus 评论和保留历史 URL 的边界。
- [x] 建立项目级 `AGENTS.md` 和本进度文档。
- [x] 初始化 Astro、TypeScript、原生 CSS 与官方 RSS／Sitemap 依赖。
- [x] 迁移 25 篇 Markdown，并为 24 篇线上旧文章保留原 permalink。
- [x] 完成首页、文章列表、正文、标签、归档、项目、关于、404 和旧页面兼容路由。
- [x] 添加 canonical、Open Graph 基础字段、JSON-LD、RSS、Sitemap 和深色模式。
- [x] 添加旧 Service Worker 自注销文件与页面侧取消注册逻辑。
- [x] 仓库所有者已删除旧 Gitalk OAuth App，使历史中公开的 OAuth Secret 失效。
- [x] 完成生产构建、历史 URL 检查和本地核心页面 HTTP 抽查。
- [x] 按 Astro 官方方案添加 GitHub Pages Actions 工作流，同时兼容 `main` 与现有 `master` 分支。
- [x] 使用真实仓库与 Announcements 分类标识接入 giscus，按文章 pathname 严格映射。
- [x] 经确认删除旧 Jekyll/Hux 源码、旧许可证和未引用模板资源，保留已迁移正文与实际引用截图。
- [x] 使用原创 SVG favicon 替换旧模板图标。
- [x] 从验证后的 Astro 文件树创建无父提交的本地 `main` 发布候选，未修改远端。
- [x] 推送 `main`、切换默认分支并通过 GitHub Actions 发布 Astro 站点。
- [x] 配置 `github-pages` 环境允许 `main` 部署，并完成线上核心页面、历史 URL 与 giscus 验收。
- [x] 确认 GitHub 贡献者接口当前只返回 `leonsux`。
- [x] 将文章目录调整为宽屏右侧粘性侧栏，并在窄屏回落到正文上方。
- [x] 重做首页首屏层级与排版，压缩 Hero 并让最新文章进入宽屏首屏下半部分。
- [x] 将首页主标语改为 `Try EveryThing`，移除 Hero 操作按钮，并将 GitHub 入口调整为顶栏轻量外链。
- [x] 新增 Codex 代理排障文章，并制作重连过程、代理链路与 `.env` 配置三张原创 SVG 技术配图。
- [x] 新增从线性方程理解大模型权重的科普文章，并制作模型参数、训练与推理、分布式权重三张原创 SVG 配图。

## 进行中

- [ ] 完成移动端、键盘操作、资源加载和控制台状态的最终浏览器验收。
- [ ] 观察旧 Service Worker 自注销效果，经过一个发布周期后再确认移除退役脚本。

## 待办

### 阶段一：安全与基线

- [x] 撤销已公开的 Gitalk OAuth Secret。
- [x] 设计并验证旧 Service Worker 自注销构建产物。
- [x] 记录所有需要兼容的页面和文章地址，清单位于 `scripts/legacy-urls.json`。

### 阶段二：Astro 基础

- [x] 初始化 Astro 和必要官方依赖。
- [x] 建立内容集合、基础布局、设计变量和路由。
- [x] 完成首页最小可识别预览。

### 阶段三：内容与页面

- [x] 迁移 25 篇 Markdown，保持历史文章 URL。
- [x] 完成首页、文章列表、正文、标签、归档和关于页面。
- [x] 核验公开项目后完成项目页面。
- [x] 为旧页面建立兼容路由。

### 阶段四：内容能力

- [x] 添加 RSS、Sitemap、canonical、Open Graph 基础字段和 JSON-LD。
- [x] 接入 giscus。
- [x] 添加深色模式、文章目录和必要的无障碍支持。
- [ ] 制作站点级社交分享图。

### 阶段五：验证与发布

- [x] 通过 Astro 检查和生产构建。
- [ ] 完成移动端、键盘操作、资源加载和控制台状态的最终浏览器验收。
- [x] 验证构建产物中的历史 URL，并抽查核心路由 HTTP 状态。
- [x] 经确认后添加 GitHub Pages CI/CD。
- [x] 单独确认后公开部署。
- [x] 经确认清理旧 Jekyll/Hux 文件。
- [ ] 经过一个发布周期后，单独确认并移除退役 Service Worker。

## 阻塞与确认门禁

- 旧 Gitalk OAuth App 已删除；发布候选中不再包含 Secret 配置，旧提交中的值也已经失效。
- GitHub Discussions 与 giscus GitHub App 均已启用，评论配置已完成。
- 远端默认分支与生产分支均已切换为干净的 `main`；`master` 仅作为备份保留。
- 当前无发布阻塞；后续公开部署仍由 `main` 的 GitHub Actions 工作流执行。
- 站点级社交分享图的内置生成服务本轮发生网络错误，未使用需要 API Key 的回退方案。

## 最近验证

- 2026-08-14：工作区开始实施前为干净状态。
- 2026-08-14：确认项目中原先不存在项目级 `AGENTS.md` 和 `ROADMAP.md`。
- 2026-08-14：确认 Contributors 中的旧模板作者来自默认分支提交历史；GitHub 官方说明历史改写后统计可能需要约 24 小时刷新。
- 2026-08-15：从线上三页文章目录提取 24 个公开文章 URL，并确认 1 个 Markdown 源文件当前未发布。
- 2026-08-15：解析 `scripts/legacy-urls.json` 成功；确认 9 个页面地址、24 个唯一文章地址和 25 个唯一源文件记录。
- 2026-08-15：`npm run build` 通过；Astro 检查结果为 0 errors、0 warnings、0 hints，共生成 36 个页面。
- 2026-08-15：`npm run verify:urls` 通过；验证 34 个历史及迁移地址均存在于构建产物。
- 2026-08-15：抽查首页、文章、项目、关于、标签、归档、RSS、404 和两类历史文章路径，HTTP 状态均为 200。
- 2026-08-15：通过 GitHub 公开 API 核对代表项目；确认仓库 `leonsux/leonsux.github.io` 当前未启用 Discussions。
- 2026-08-15：通过 npm 官方安全公告接口审计生产依赖，结果为 0 vulnerabilities。
- 2026-08-15：确认 Discussions 已启用；giscus 官方接口确认该仓库尚未安装 giscus GitHub App。
- 2026-08-15：依据 Astro 官方 `withastro/action@v6` 方案添加 GitHub Pages 工作流；未 push、未触发部署。
- 2026-08-15：通过 giscus 官方接口取得真实仓库与 Announcements 分类标识，并将评论接入全部文章页面。
- 2026-08-15：确认 25 个文章构建产物均包含 giscus 配置；本机文章预览与 giscus 客户端脚本均返回 HTTP 200。
- 2026-08-15：仓库所有者确认已删除旧 Gitalk OAuth App，公开过的 OAuth Secret 已撤销。
- 2026-08-15：经确认清理 149 个旧 Jekyll/Hux 文件及未引用模板资源；原文件仍可从本地 `master` 恢复。
- 2026-08-15：清理后重新构建 36 个页面，Astro 检查维持 0 errors、0 warnings、0 hints，34 个历史及迁移地址全部通过。
- 2026-08-15：创建无父提交的本地 `main` 发布候选；原 `master` 与 `codex/astro-rebuild` 保持不变，远端未修改。
- 2026-08-15：推送远端 `main` 并切换为默认分支；远端 `master` 保留，未强推、未删除。
- 2026-08-15：首次部署因 `github-pages` 环境分支保护拒绝，添加 `main` 部署规则后，第 3 次运行成功。
- 2026-08-15：线上首页确认由 Astro v7.2.2 生成；首页、文章列表、两条历史文章路径、RSS 与 Sitemap 均返回 HTTP 200。
- 2026-08-15：线上文章确认加载 giscus，并使用 `leonsux/leonsux.github.io`、`Announcements` 与 `pathname` 映射。
- 2026-08-15：GitHub 公开 API 确认默认分支为 `main`，贡献者列表当前仅包含 `leonsux`。
- 2026-08-15：文章目录侧栏改造后，Astro 检查维持 0 errors、0 warnings、0 hints，共构建 36 个页面，34 个历史及迁移地址全部通过。
- 2026-08-15：在 1440px 宽屏确认正文与标题对齐、目录右侧粘性停靠；在 390px 窄屏确认目录回落到正文上方且宽度未溢出。
- 2026-08-15：首页首屏改造后，Astro 检查维持 0 errors、0 warnings、0 hints，共构建 36 个页面，34 个历史及迁移地址全部通过。
- 2026-08-15：在 1440×900 视口确认 Hero 高度为 527px、最新文章卡片进入首屏；在 390×844 视口确认页面无横向溢出。
- 2026-08-15：Codex 代理排障文章与两张 SVG 配图完成后，Astro 检查维持 0 errors、0 warnings、0 hints，共构建 37 个页面，34 个历史及迁移地址全部通过；新文章与两张配图均存在于构建产物。
- 2026-08-15：本地文章路由返回完整正文与目录，两张 SVG 均成功加载为 1200×675，页面在 809px 视口无横向溢出。
- 2026-08-16：以原创 SVG 重连序列图替代真实截图待办，完整展示 `Reconnecting…1/5` 至 `Reconnecting…5/5`；Astro 检查维持 0 errors、0 warnings、0 hints，共构建 37 个页面，34 个历史及迁移地址全部通过，文章与新 SVG 在 4321 端口均返回 HTTP 200。
- 2026-08-16：首页再次精简后，Astro 检查维持 0 errors、0 warnings、0 hints，共构建 37 个页面，34 个历史及迁移地址全部通过；在 1280×720 视口确认 Hero 按钮已移除、`Try EveryThing` 单行显示、顶栏 GitHub 外链存在且页面无横向溢出。
- 2026-08-16：提交 `73b1ebc` 已推送至远端 `main`，GitHub Pages 第 4 次部署成功；线上首页与 Codex 代理排障文章均返回 HTTP 200，新标语、GitHub 顶栏入口和重连 SVG 已生效。
- 2026-08-16：大模型权重科普文章与三张 SVG 配图完成后，Astro 检查维持 0 errors、0 warnings、0 hints，共构建 38 个页面，34 个历史及迁移地址全部通过；三张配图均以 1200×675 正常加载，文章在 1440×900 与 390×844 视口均无横向溢出。
