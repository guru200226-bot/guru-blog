import CallToAction from '@/app/components/CallToAction';
import RecentPosts from '@/app/components/RecentPosts';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import Post from '@/lib/models/post.model.js';
import { connect } from '@/lib/mongodb/mongoose.js';

export default async function PostPage({ params }) {
  let post = null;

  try {
    await connect();
    post = await Post.findOne({ slug: params.slug }).lean();
  } catch (error) {
    console.error('Error getting post:', error);
    post = null;
  }

  if (!post) {
    return (
      <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h2 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          Post not found
        </h2>
      </main>
    );
  }

  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post.title}
      </h1>
      <Link href={`/search?category=${post.category}`} className='self-center mt-5'>
        <Button color='gray' pill size='xs'>
          {post.category}
        </Button>
      </Link>
      <img
        src={post.image}
        alt={post.title}
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {(post?.content?.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
      <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div>
      <RecentPosts limit={3} />
    </main>
  );
}