import PropTypes from 'prop-types';
const Post = ({ post }) => {
  console.log(post, 'coming from post');
  const { body, id, title, userId } = post;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-100 via-pink-100 to-red-50 rounded-lg overflow-hidden shadow-xl">
      <div className="p-6">
        <h1 className="text-3xl font-bold  mb-4">Title: {title}</h1>
        <p className="text-lg  mb-4">ID: {id}</p>
        <p className="text-lg  mb-4">User ID: {userId}</p>
        <p className="text-lg ">{body}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
