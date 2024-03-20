import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
    <>
      <div className="">
        <div className="sticky -top-28">
          <Header></Header>
          <div className=" py-20 container mx-auto bg-blue-100 flex items-center justify-center">
            <h2 className="text-8xl uppercase font-bold text-blue-500">
              loading... <br />
              <span className="text-xl border  p-5 border-blue-500 border-dashed">
                {' '}
                Under construction
              </span>
            </h2>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
