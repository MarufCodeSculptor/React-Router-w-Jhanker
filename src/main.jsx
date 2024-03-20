import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Users from './Components/Users';
import Services from './Components/Services';
import User from './Components/User';
import UserDetails from './Components/UserDetails';
import Posts from './Components/Posts/Posts';
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
        path: 'services',
        element: <Services></Services>,
      },

      {
        path: 'users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users></Users>,
      },
      {
        path: 'users/user/:userId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: '/posts',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
