import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'demo',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'demo',
  host: 'preview.contentful.com'
});

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: any;
  publishDate: string;
  featuredImage: {
    url: string;
    title: string;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate'
  });

  return response.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    description: item.fields.description,
    content: item.fields.content,
    publishDate: item.fields.publishDate,
    featuredImage: {
      url: item.fields.featuredImage.fields.file.url,
      title: item.fields.featuredImage.fields.title
    }
  }));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1
  });

  if (!response.items.length) {
    return null;
  }

  const item = response.items[0];
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    description: item.fields.description,
    content: item.fields.content,
    publishDate: item.fields.publishDate,
    featuredImage: {
      url: item.fields.featuredImage.fields.file.url,
      title: item.fields.featuredImage.fields.title
    }
  };
}