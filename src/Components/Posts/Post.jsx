import PropTypes from 'prop-types';
const Post = ({ post }) => {
  console.log(post, 'coming from post');
  const { body, title } = post;

  return (
    <div className="mx-auto bg-gradient-to-r from-purple-100 via-pink-100 to-red-50 rounded-lg overflow-hidden shadow-xl">
      <div className="p-6 flex flex-col h-full items-center justify-center">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold  mb-4 uppercase">
            {title.split(' ').slice(0, 3).join(' ')}
          </h1>

          <p className="text-lg ">{body}</p>
        </div>
        <div className="border w-full">
          <button className="btn w-fit btn-primary mt-3">Post details</button>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
