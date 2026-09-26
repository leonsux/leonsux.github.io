import type { CollectionEntry } from 'astro:content';
import { displayText } from './typography';

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function formatDate(date: Date) {
  return displayText(new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date));
}
