export interface Project {
  name: string;
  description: string;
  language: string;
  source: string;
  demo?: string;
  status: 'active' | 'archive';
}

export const projects: Project[] = [
  {
    name: 'Aibo',
    description: '一个陪你打游戏的 AI 搭子：实时截屏、理解画面，再用声音给出陪伴式反馈。',
    language: 'HTML',
    source: 'https://github.com/leonsux/Aibo',
    status: 'active',
  },
  {
    name: 'grip-forge',
    description: '纯前端握力训练计时器，支持训练计划、本地持久化、日历热力图与连续打卡统计。',
    language: 'JavaScript',
    source: 'https://github.com/leonsux/grip-forge',
    demo: 'https://leonsux.github.io/grip-forge/',
    status: 'active',
  },
  {
    name: 'biliVan',
    description: '面向 Bilibili 的播放进度管理实验，让每次观看都从一个明确状态重新开始。',
    language: 'JavaScript',
    source: 'https://github.com/leonsux/biliVan',
    status: 'active',
  },
  {
    name: 'dungeon-arcade',
    description: '使用原生 HTML、CSS 与 JavaScript 构建的暗黑幻想网页小游戏集合。',
    language: 'JavaScript',
    source: 'https://github.com/leonsux/dungeon-arcade',
    demo: 'https://leonsux.github.io/dungeon-arcade/',
    status: 'active',
  },
  {
    name: 'naruto-hand-seals',
    description: '一个用原生 Web 技术制作的火影忍术结印交互小实验。',
    language: 'JavaScript',
    source: 'https://github.com/leonsux/naruto-hand-seals',
    demo: 'https://leonsux.github.io/naruto-hand-seals/',
    status: 'active',
  },
  {
    name: 'dt',
    description: '早期使用 React 全家桶与 Ant Design Mobile 完成的移动端产品仿制项目。',
    language: 'JavaScript',
    source: 'https://github.com/leonsux/dt',
    status: 'archive',
  },
];
