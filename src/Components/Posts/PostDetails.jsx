import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const singlePost = useLoaderData();
  const { body, title, id } = singlePost;

  return (
    <div className="container mx-auto bg-blue-50">
      <h3 className="text-center text-3xl font-bold uppercase text-purple-600 p-5">
        post details
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-bold text-gray-500 uppercase tracking-wider"
              >
                Attribute
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-bold text-gray-500 uppercase tracking-wider"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-bold">Title</td>
              <td className="px-6 py-4 capitalize">{title}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-bold">Body</td>
              <td className="px-6 py-4 capitalize">{body}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-bold">ID</td>
              <td className="px-6 py-4">{id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostDetails;
