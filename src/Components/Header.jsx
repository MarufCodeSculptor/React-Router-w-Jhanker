import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="bg-gray-300 p-3">
        <div className="container mx-auto">
          <nav className="bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="hidden md:flex gap-3">
                  <span className="btn ">
                    {' '}
                    <Link to="/"> Home </Link>
                  </span>
                  <button className="btn ">
                    <Link to="/contacts"> contacts </Link>
                  </button>
                  <button className="btn ">
                    <Link to="/blogs"> Blogs </Link>
                  </button>
                  <button className="btn ">
                    {' '}
                    <Link to="/about"> About us </Link>
                  </button>
                  <button className="btn ">
                    {' '}
                    <Link to="/users">Users</Link>
                  </button>
                  <button className="btn ">
                    {' '}
                    <Link to="/services">Services</Link>
                  </button>
                  <button className="btn">
                    {' '}
                    <Link to="/posts">Posts</Link>
                  </button>
                </div>
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
