import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { sortPosts } from '../utils/posts';

export async function GET(context: { site?: URL }) {
  const posts = sortPosts(await getCollection('blog', ({ data }) => !data.draft));

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map(({ data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedAt,
      link: data.permalink,
      categories: data.tags,
    })),
    customData: '<language>zh-CN</language>',
  });
}
