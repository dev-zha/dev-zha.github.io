import { getArticles, getProjects } from '@/utils/helper';
import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import LinkToButton from '@/components/shared/LinkToButton';
import ArticleCard from '@/components/shared/card/ArticleCard';

export default function Articles() {
  const articles = getArticles();

  return (
    <MContainer id="blogs">
      <MHeaderTitle>Blogs</MHeaderTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto px-4 mt-8">
        {articles?.slice(0, 4)?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <LinkToButton>Explore More Articles</LinkToButton>
      </div>
    </MContainer>
  );
}
