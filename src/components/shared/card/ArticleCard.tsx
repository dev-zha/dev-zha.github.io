import { TbExternalLink } from 'react-icons/tb';
import { Article } from '@/types/article';
import Chip from '../Chip';

interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-52 rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/10 hover:scale-[101%] transition ease-in cursor-pointer overflow-hidden"
    >
      <div className="flex w-full h-full">
        <img
          src={article.image}
          alt="Project Image"
          className="w-1/3 h-full object-cover"
        />
        <div className="flex flex-col h-full justify-between p-4">
          <div className="flex flex-col">
            <h6 className="text-lg font-bold text-gray-900 line-clamp-2">
              {article.title}
            </h6>
            <span className="text-gray-400 text-xs mt-1">{article.date}</span>
            <span className="text-gray-900 text-xs font-mono line-clamp-2 mt-1">
              {article.description}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-5 opacity-0 group-hover:opacity-100 transition ease-in">
        <TbExternalLink className="w-6 h-6 stroke-gray-600" />
      </div>
    </div>
  );
}
