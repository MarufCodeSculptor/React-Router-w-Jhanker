/* eslint-disable react/no-unknown-property */
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="bg-gray-100 container mx-auto p-5 min-h-[50rem]">
      <h2 className="text-3xl font-bold text-center">
        Users: <span className="text-blue-600">{users.length}</span>{' '}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 lg:gap-5">
        {users.map(user => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
