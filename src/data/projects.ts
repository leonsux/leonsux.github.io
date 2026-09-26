export interface Project {
  title: string;
  description: string;
  cover: string;
  tags: string[];
  date: string | null;
  status: 'active' | 'archive' | 'placeholder';
  url: string | null;
  github: string | null;
  featured: boolean;
  published: boolean;
}
export const projects: Project[] = [
  {
    title: 'Aibo',
    description:
      '一个陪你打游戏的 AI 搭子：实时截屏、理解画面，再用声音给出陪伴式反馈。',
    cover: '/images/garden/project-aibo.svg',
    tags: ['AI', '游戏陪伴'],
    date: null,
    status: 'active',
    url: null,
    github: 'https://github.com/leonsux/Aibo',
    featured: true,
    published: true,
  },
  {
    title: 'grip-forge',
    description:
      '纯前端握力训练计时器，让训练计划、日历热力图和每一次坚持都有迹可循。',
    cover: '/images/garden/project-grip.svg',
    tags: ['Web App', '训练工具'],
    date: null,
    status: 'active',
    url: 'https://leonsux.github.io/grip-forge/',
    github: 'https://github.com/leonsux/grip-forge',
    featured: true,
    published: true,
  },
  {
    title: 'dungeon-arcade',
    description:
      '用原生 Web 技术构建的暗黑幻想网页小游戏集合。小小浏览器，也能装下一场冒险。',
    cover: '/images/garden/project-dungeon.svg',
    tags: ['游戏', 'JavaScript'],
    date: null,
    status: 'active',
    url: 'https://leonsux.github.io/dungeon-arcade/',
    github: 'https://github.com/leonsux/dungeon-arcade',
    featured: true,
    published: true,
  },
  {
    title: 'biliVan',
    description:
      '面向 Bilibili 的播放进度管理实验，让每次观看都从一个明确状态重新开始。',
    cover: '/images/garden/project-web.svg',
    tags: ['JavaScript', '视频工具'],
    date: null,
    status: 'active',
    url: null,
    github: 'https://github.com/leonsux/biliVan',
    featured: false,
    published: true,
  },
  {
    title: 'naruto-hand-seals',
    description: '一个用原生 Web 技术制作的火影忍术结印交互小实验。',
    cover: '/images/garden/project-web.svg',
    tags: ['交互实验', 'JavaScript'],
    date: null,
    status: 'active',
    url: 'https://leonsux.github.io/naruto-hand-seals/',
    github: 'https://github.com/leonsux/naruto-hand-seals',
    featured: false,
    published: true,
  },
  {
    title: 'dt',
    description:
      '早期使用 React 全家桶与 Ant Design Mobile 完成的移动端产品仿制项目。',
    cover: '/images/garden/project-web.svg',
    tags: ['React', '学习记录'],
    date: null,
    status: 'archive',
    url: null,
    github: 'https://github.com/leonsux/dt',
    featured: false,
    published: true,
  },
  ...['旅行猫咪', 'AI Coding Workflow', '儿童电脑启蒙'].map((title) => ({
    title,
    description: '视觉 Demo 占位，尚无真实项目资料。',
    cover: '',
    tags: [],
    date: null,
    status: 'placeholder' as const,
    url: null,
    github: null,
    featured: false,
    published: false,
  })),
];
