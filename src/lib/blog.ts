import fs from 'fs-extra';
import path from 'path';
import { Blog } from '@/types/blog';
import blogs from '@/data/blogSchema.generated.json';
import { BLOG_DOCS_DIR } from '@/utils/constants';

export function getAllBlogIds(): string[] {
  return blogs.map((blog) => blog.id) || [];
}

export function getSortedBlogsData(): Blog[] {
  return blogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export interface BlogData {
  frontMatter: Blog;
  content: string;
}
export async function getBlogData(id: string): Promise<BlogData | null> {
  try {
    const fullPath = path.join(BLOG_DOCS_DIR, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const blogMatterData = blogs.filter((blog) => blog.id === id)[0];

    const contentWithoutFrontMatter = fileContents
      .replace(/---([\s\S]*?)---/, '')
      .trim();

    if (!blogMatterData || !contentWithoutFrontMatter) {
      return null;
    }

    return {
      frontMatter: blogMatterData,
      content: contentWithoutFrontMatter,
    };
  } catch (_) {
    return null;
  }
}
