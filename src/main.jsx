import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Users from './Components/Users';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/contacts',
        element: <Contacts></Contacts>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: 'users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
