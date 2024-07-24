import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/app/lib/defenitions';
import { FaArrowCircleRight } from 'react-icons/fa';

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <article className="flex flex-col gap-4 sm:flex-row bg-gray-50">
      <div className="flex w-full sm:w-[200px]">
        <Image
          className="w-full sm:min-w-[200px] sm:w-[200px]"
          src={article.imgUrl} width={200} height={200} alt={article.title}
        />
      </div>
      <div className="flex flex-col w-fit p-2">
        <h2 className="text-2xl">{article.title}</h2>
        <p className="py-4">{article.description}</p>
        <Link
          className="flex items-center justify-center mt-auto w-full sm:w-[130px] bg-blue-600 text-white font-medium p-2 hover:bg-blue-400 rounded"
          href={`/articles/${article.id}`}
        >
          Open article &nbsp; <FaArrowCircleRight />
        </Link>
      </div>
    </article>
  )
}
