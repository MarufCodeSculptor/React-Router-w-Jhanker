import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className="min-h-screen bg-purple-200 container mx-auto py-10 rounded-lg flex  justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Field
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Name</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Username</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Email</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Phone</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Website</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href={user.website} className="text-blue-500">
                  visit
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Address</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.address.city}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Geo</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Latitude: {user.address.geo.lat}, Longitude:{' '}
                {user.address.geo.lng}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold">Company</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.company.name}
                <br />
                <span className="italic">
                  {user.company.bs}, {user.company.catchPhrase}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default UserDetails;
