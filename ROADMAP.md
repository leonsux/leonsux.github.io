# ROADMAP

## 当前状态

- 状态：重构与 Drift Rush 已从 `main` 部署；首页 Writing 区域的悬停文字闪动已完成修复与验证。
- 目标：以 V3 Demo 的暖纸、森林绿和拼贴语言，重构为可长期维护的个人数字花园。
- 生产约束：GitHub Pages 仍由 `main` 自动部署；后续提交、推送与公开部署按项目授权规则执行。

## 已完成

- [x] 建立暖纸、森林绿、橙色点缀的 Design Tokens，并支持浅色／深色主题。
- [x] 重构首页为 Hero、精选项目、Writing、Now、About、Footer 六段结构。
- [x] 新增 `Now` 页面，内容集中在 `src/data/now.ts`。
- [x] 保留现有真实项目、文章正文、标签、归档、评论和历史永久链接。
- [x] 新增纸张、撕边、胶带、便签、Polaroid、Doodle 等装饰组件。
- [x] 新增响应式本地图片、项目概念插画、Open Graph 分享图和素材来源说明。
- [x] 增加主题切换、移动端菜单、轻量指针／倾斜／磁吸／视差交互，并在触屏、低性能和 reduced-motion 环境关闭。
- [x] 更新 giscus 为延迟加载，并同步主题配置；不保存任何 OAuth Secret。
- [x] 增加 SEO、站内资源、历史 URL 和无障碍自动检查脚本。

## 未完成与待确认

- [ ] 将 `public/images/garden/README.md` 中列出的氛围占位图替换为作者自有或已授权照片。
- [ ] 如需展示真实项目截图，替换 `project-*.svg` 概念插画；素材性质和来源记录在 `public/images/garden/README.md`。
- [ ] 为“旅行猫咪”“AI Coding Workflow”“儿童电脑启蒙”补充真实资料和入口；当前三项仅保存在数据层的未发布占位，不会出现在首页。

## 最近验证

- 2026-10-02 19:31：复现 Writing 文章标题悬停时右侧便签文字像素短暂变化；移除标题箭头位移动画后，逐帧截图在悬停与移出期间一致，便签位置保持稳定。`npm run build`（含 Astro 检查）、`npm run verify:site` 和 `npm run verify:urls` 均通过。
- 2026-10-02 18:31：Drift Rush 更换为专属海岸漂移 SVG 封面；构建（含 Astro 检查）、站点资源检查及 34 个历史 URL 验证通过。Playwright 检查首页与项目页在 1440、390 像素宽度下封面加载、尺寸及横向溢出，并查看卡片截图，结果通过。
- 2026-09-28 21:52：将首页精选项目 `dungeon-arcade` 替换为 `drift-rush`；`npm run check`、`npm run build`、`npm run verify:site`、`npm run verify:urls` 均通过，并确认构建首页仅包含新的试玩与仓库链接。
- 2026-09-26 21:19：执行 `npm run build`（含 `npm run check`）、`npm run verify:site` 和 `npm run verify:urls`；检查无错误，构建生成 39 页、856 个站内引用与 34 个历史地址均通过。
- 2026-09-26 17:32：移除首页和项目卡片中关于演示素材的可见占位说明；图片替代文字改为直接描述图像内容。
- 2026-09-26 14:32：Playwright 检查 1440、1280、1024、768、430、390、375 七档宽度，共 42 个路由／视口组合；无横向溢出、页面错误或缺失图片。
- 2026-09-26 14:32：键盘菜单、Escape 关闭与焦点回收、主题持久化、Storage 不可用回退、reduced-motion 清理、桌面视差、触屏关闭特效和无 JavaScript 页面均通过。
- 2026-09-26 14:32：axe 检查首页、项目、文章列表、Now、About 和历史文章页，WCAG 2A／2AA／2.1 AA 无违规。
- 2026-09-26 14:32：Lighthouse 本地首页桌面与移动配置均为 Performance 100、Accessibility 100、Best Practices 100、SEO 100；分数仅代表本地静态预览，线上部署后需重新测量。
- 2026-09-26 17:24：`npm run check` 通过，Astro 0 errors、0 warnings、0 hints；`npm run build` 生成 39 个页面。
- 2026-09-26 17:24：`npm run verify:site` 验证 39 个 HTML 页面、单一 h1、SEO 元数据和 856 个站内资源／页面引用。
- 2026-09-26 17:24：`npm run verify:urls` 验证 34 个历史及迁移地址。
