import { data } from '@/app/lib/api-data';

interface ArticleParams {
  params: {
    id: number;
  };
}

export async function GET(request: Request, { params }: ArticleParams) {
  const id = Number(params.id);
  const item = data.find(article => article.id === id);
  return Response.json({ data: item ?? {} });
}
