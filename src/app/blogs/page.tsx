import { Metadata } from "next";
import BlogListPageComponent from "@/components/pages/BlogListPageComponent";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profileData.name} | Blogs`,
  description: `Welcome to my space, where I share thoughts on coding, the web, and a diverse range of topics. Feel free to explore!`,
  openGraph: {
    title: `${profileData.name} | Blogs`,
    description: `Welcome to my space, where I share thoughts on coding, the web, and a diverse range of topics. Feel free to explore!`,
    images: '/images/open-graph/blogs-og.png',
  },
};

export default function BlogListPage() {
  return <BlogListPageComponent />;
}
