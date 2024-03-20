import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className=" py-20 container mx-auto bg-blue-100 flex items-center justify-center">
        <h2 className="text-8xl uppercase font-bold text-blue-500">
          {' '}
          section Home{' '}
        </h2>
      </div>
      <hr className="border-1 border-dashed border-pink-400 my-10 container mx-auto" />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
