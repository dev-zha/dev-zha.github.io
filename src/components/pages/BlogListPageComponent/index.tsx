import MListPageHeader from '@/components/shared/motion/MListPageHeader';
import { getSortedBlogsData } from '@/lib/blog';
import CardList from './CardList';

export default function BlogListPageComponent() {
  const blogs = getSortedBlogsData();
  return (
    <div className="w-full max-w-screen-md mt-16 mx-auto rounded-lg py-6">
      <MListPageHeader
        titile="My Blogs"
        text={`Welcome to my space, where I share thoughts on coding, the web, and a diverse range of topics. Feel free to explore, and if you have any thoughts on what I've written, don't hesitate to reach out and say hello!`}
      />
      <CardList blogs={blogs} />
    </div>
  );
}
