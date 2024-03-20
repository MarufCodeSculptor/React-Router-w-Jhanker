import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div>
      <div className=" bg-gray-200 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <div className="text-xl font-bold text-blue-800 mb-4">
            {user.name}
          </div>
          <div className="text-lg text-gray-700">
            <div className="mb-2">
              <span className="font-semibold">Username:</span> {user.username}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Phone:</span> {user.phone}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Website:</span>{' '}
              <a href={user.website} className="text-blue-500">
                visit
              </a>
            </div>
            <button className="btn btn-primary">
               <Link to={`user/${user.id}`} >See more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
