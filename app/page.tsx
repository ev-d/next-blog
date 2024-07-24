import { Suspense } from 'react';
import { fetchArticles } from '@/app/lib/data';
import { ArticlesSection } from '@/app/ui/articles/ArticlesSection';

export default async function ArticlesPage () {
  const { data: articles } = await fetchArticles();

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-5 md:p-24">
      <div className="max-w-[800px]">
        <h1 className="text-4xl font-bold mb-10 sm:text-6xl mr-auto">
          Dmitriy's Blog
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ArticlesSection articles={articles}/>
        </Suspense>
      </div>
    </main>
  );
}
