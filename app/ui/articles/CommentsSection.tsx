'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { commonDateFormatter } from '@/app/lib/formatters/date.intl';

interface Comment {
  text: string;
  date: Date;
}

export const CommentsSection = () => {
  const [commentsList, addComment] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>('');

  const handleSaveComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComment('');
    addComment([...commentsList, {text: comment, date: new Date()}]);
  }

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.currentTarget?.value;
    setComment(comment);
  }

  return (
    <>
      <section className="flex flex-col mt-10 mb-20">
        <h4 className="mb-2 text-2xl">Users comments</h4>
        <div className="flex flex-col gap-2">
          {commentsList.map((comment) => {
            return (
              <div key={comment.text}>
                <p className="" >{comment.text}</p>
                <p className="text-sm text-gray-500">{commonDateFormatter.format(comment.date)}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section className="flex flex-col gap-2 md:gap-4 w-full mt-auto">
        <h4 className="mb-2 text-2xl">Comment</h4>
        <form className="flex flex-col gap-2 md:gap-4 w-full" onSubmit={handleSaveComment}>
          <textarea
            className="w-full h-[150px] border-2 border-gray-200 active:border-gray-500 p-2"
            placeholder="Your comment here..."
            onChange={handleChangeTextArea}
            value={comment}
            cols={100}
          />
          <button
            type="submit"
            className="flex items-center justify-center mt-auto w-full sm:w-[130px] bg-blue-600 text-white font-medium p-2 hover:bg-blue-400 disabled:bg-blue-200 rounded"
            disabled={comment.trim().length < 3}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  )
}
