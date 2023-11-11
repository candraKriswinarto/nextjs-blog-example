'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FC, useState } from 'react';

interface FormCommentProps {
  postId: string;
}
const FormComment: FC<FormCommentProps> = ({ postId }) => {
  const [comment, setComment] = useState<string>('');
  const router = useRouter();
  const { data } = useSession();

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    if (comment.trim() !== '') {
      try {
        const newComment = await axios.post('/api/comments', {
          postId,
          text: comment,
        });
        if (newComment.status === 200) {
          router.refresh();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className='mt-4'>
        <label
          htmlFor='comment'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Add Comment
        </label>
        <input
          value={comment}
          onChange={handleCommentChange}
          type='text'
          className='w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          name='comment'
        />
        <button
          disabled={!data?.user?.email}
          onClick={handleSubmitComment}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400'
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComment;
