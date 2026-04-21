import PostCard from './PostCard';
import Post from '@/lib/models/post.model.js';
import { connect } from '@/lib/mongodb/mongoose.js';

export default async function RecentPosts({ limit }) {
  let posts = [];

  try {
    await connect();
    posts = await Post.find()
      .sort({ updatedAt: -1 })
      .limit(limit)
      .lean();
  } catch (error) {
    console.log('Error getting posts:', error);
  }

  return (
    <div className='flex flex-col justify-center items-center mb-5'>
      <h1 className='text-xl mt-5'>Recent articles</h1>
      <div className='flex flex-wrap gap-5 mt-5 justify-center'>
        {posts && posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}