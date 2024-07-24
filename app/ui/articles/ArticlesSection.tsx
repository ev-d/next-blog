import { Article } from '@/app/lib/defenitions';
import { ArticleCard } from '@/app/ui/articles/ArticleCard';

export const ArticlesSection = ({ articles }: { articles: Article[] }) => {
  return (
    <section className="flex flex-col gap-4 w-full">
      {articles.map((article: Article) => (<ArticleCard article={article} key={article.id} />))}
    </section>
  );
}
