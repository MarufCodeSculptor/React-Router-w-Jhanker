import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <div className="font-bold text-xl text-blue-700 mb-2">
          User Information
        </div>
        <div className="text-gray-600 mb-4">
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Website:</span>{' '}
            <a href={user.website} className="text-blue-500">
              visit
            </a>
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
          <p>
            <span className="font-semibold">Address:</span> {user.address.city}
          </p>
          <p>
            <span className="font-semibold">Geo:</span>Latitude:
            <span className="mr-2">{user.address.geo.lat}</span>
            Longitude: <span>{user.address.geo.lng}</span>
          </p>
        </div>
        <div className="text-xs text-gray-600 mt-2">
          <span className="font-semibold">Company:</span> {user.company.name}
          <br />
          <span className="italic">
            <span className="mr-2">{user.company.bs}</span>
            <span>{user.company.catchPhrase}</span>
          </span>
        </div>
        <button className="btn mt-3 btn-primary font-bold text-white">
          {' '}
          <Link to={`user/${user.id}`}>See more</Link>{' '}
        </button>
      </div>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
