import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className="bg-yellow-100  container mx-auto rounded-lg">
      <h3 className="text-2xl uppercase font-bold text-center p-10">
        {' '}
        total Post <span>{posts.length}</span>{' '}
      </h3>
      {/* post containe */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        {posts.map(post => (
          <Post key={post.id} post={post} ></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
