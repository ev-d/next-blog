'use server';

import { redirect } from 'next/navigation';
import { fetchArticle } from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import { poppins } from '@/app/lib/fonts/poppins';
import { lato } from '@/app/lib/fonts/lato';
import { FaAngleLeft } from 'react-icons/fa';
import { CommentsSection } from '@/app/ui/articles/CommentsSection';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const { data: article } = await fetchArticle(id);
  const isArticle = article && 'id' in article;

  const previousImages = (await parent).openGraph?.images || []
  const images = [...previousImages];
  if (isArticle) {
    images.unshift(article.imgUrl);
  }
  return {
    title: isArticle ? article.title : 'Awesome article',
    description: isArticle ? article.description : 'Updated your brain',
    openGraph: {
      images,
    },
  }
}

export default async function ArticlePage({ params }: { params: { id: string }}) {
  const id = Number(params.id);
  const { data: article } = await fetchArticle(id);
  const isArticle = article && 'id' in article;

  if (!isArticle) {
    notFound();
  }

  return (
    <div className="max-w-[1000px] flex flex-col min-h-svh">
      <header className="flex items-center min-h-[50px] sticky bg-gray-200 top-0 z-10">
        <Link className="flex items-center hover:text-gray-500" href="/">
          <FaAngleLeft /> &nbsp; Back to articles
        </Link>
      </header>
      <section className="relative mt-5">
        <Image
          className="object-cover w-full h-full"
          src={article.imgUrl}
          alt={article.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: "400px" }}
        />
        <h1 className={clsx(
          "flex items-center text-3xl w-full min-h-[150px] sm:text-4xl md:text-6xl absolute bottom-0 p-2 md:p-10 text-white backdrop-blur-2xl rounded-t-2xl",
          poppins.className
        )}>
          {article.title}
        </h1>
      </section>
      <section className="mt-5">
        <p className={clsx("font-medium md:font-medium md:text-lg", lato.className)}>
          {article.text}
        </p>
      </section>
      <CommentsSection />
    </div>
  )
}
