import { notFound } from 'next/navigation';
import { BlogData, getAllBlogIds, getBlogData } from '@/lib/blog';
import BlogDetailPageComponent from '@/components/pages/BlogDetailPageComponent';

interface BlogDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: BlogDetailPageProps) {
  const { frontMatter: blog } = (await getBlogData(slug)) as BlogData;

  return {
    title: `${blog.title} | Blogs`,
    description: blog.description,
    keywords: blog.tags.join(','),
    openGraph: {
      title: `${blog.title} | Blogs`,
      description: blog.description,
      images: blog.image,
    },
  };
}

export function generateStaticParams() {
  const blogIds = getAllBlogIds();

  return blogIds.map((id) => ({
    slug: id,
  }));
}

export default async function BlogDetailPage({
  params: { slug },
}: BlogDetailPageProps) {
  if (!getAllBlogIds().includes(slug)) {
    return notFound();
  }

  const blogData = await getBlogData(slug);

  if (!blogData) {
    return notFound();
  }

  return (
    <BlogDetailPageComponent
      blog={blogData.frontMatter}
      content={blogData.content}
    />
  );
}
