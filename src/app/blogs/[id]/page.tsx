import Comments from '@/components/comments';
import FormComment from '@/components/form-comments';

const BlogDetailPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold'>Post one</h1>
      <p>Written by: john doe</p>
      <div className='mt-4'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        minima dolor ad repellendus, delectus impedit velit suscipit nisi
        blanditiis repellat.
      </div>

      <Comments />
      <FormComment />
    </div>
  );
};

export default BlogDetailPage;
