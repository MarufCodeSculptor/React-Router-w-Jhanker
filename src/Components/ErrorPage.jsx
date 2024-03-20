import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const hanglenNavigate = () => {
    navigate(-1);
  };
  console.log(error);
  return (
    <div className="p-20 container mx-auto">
      <h3 className="text-5xl text-blue-500 font-bold text-center">Oops....</h3>
      <p>{error.statusText=='Page not found' || error.message}</p>
      <p>
        {error.status === 404 && (
          <div>
            <p className="text-red-600">Page not found</p>
            <button
              onClick={hanglenNavigate}
              className="btn btn-success btn-outline"
            >
              {' '}
              go back{' '}
            </button>
          </div>
        )}
      </p>
    </div>
  );
};

export default ErrorPage;
