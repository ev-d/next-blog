import { Article } from '@/app/lib/defenitions';

export const fetchArticles = async () => {
  const request = await fetch('http://localhost:3000/api/articles', {
    next: { revalidate: 60 }
  });
  return await request.json();
}

export const fetchArticle = async (id: number | string): Promise<{data: Article | Object}> => {
  const request = await fetch(`http://localhost:3000/api/articles/${id}`, {
    next: { revalidate: 1 }
  });
  return await request.json();
}
