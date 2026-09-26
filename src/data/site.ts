export const site = {
  title: 'Leonsux',
  description: 'Leonsux 的个人数字花园：用代码构建有趣的产品，也用文字记录思考的过程。',
  url: 'https://leonsux.github.io',
  email: 'gooleonsux@gmail.com',
  github: 'https://github.com/leonsux',
  juejin: 'https://juejin.cn/user/905653311247688',
} as const;

export const navigation = [
  { href: '/posts/', label: 'Writing' },
  { href: '/projects/', label: 'Projects' },
  { href: '/now/', label: 'Now' },
  { href: '/about/', label: 'About' },
] as const;
