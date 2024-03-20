/* eslint-disable react/no-unknown-property */
import { useLoaderData } from 'react-router-dom';

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
          <div key={user.id}>
            {/* card  */}

            <div class="p-6 bg-white shadow-lg rounded-lg">
              <div class="font-bold text-xl text-blue-700 mb-2">
                User Information
              </div>
              <div class="text-gray-600 mb-4">
                <p>
                  <span class="font-semibold">Name:</span> {user.name}
                </p>
                <p>
                  <span class="font-semibold">Username:</span> {user.username}
                </p>
                <p>
                  <span class="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                  <span class="font-semibold">Phone:</span> {user.phone}
                </p>
                <p>
                  <span class="font-semibold">Website:</span>{' '}
                  <a href={user.website} class="text-blue-500">
                    visit
                  </a>
                </p>
              </div>
              <div class="border-t border-gray-200 pt-4 text-sm text-gray-500">
                <p>
                  <span class="font-semibold">Address:</span>{' '}
                  {user.address.city}
                </p>
                <p>
                  <span class="font-semibold">Geo:</span>Latitude:
                  <span className="mr-2">{user.address.geo.lat}</span>
                  Longitude: <span>{user.address.geo.lng}</span>
                </p>
              </div>
              <div class="text-xs text-gray-600 mt-2">
                <span class="font-semibold">Company:</span> {user.company.name}
                <br />
                <span class="italic">
                  <span className="mr-2">{user.company.bs}</span>
                  <span>{user.company.catchPhrase}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
