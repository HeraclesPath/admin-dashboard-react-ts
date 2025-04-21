import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import Users from './pages/Users';
import Products from './pages/Products';
import Error from './pages/Error';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Posts from './pages/Posts';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
import Charts from './pages/Charts';
import Logs from './pages/Logs';
import EditProfile from './pages/EditProfile';
import User from './pages/User';
import Product from './pages/Product';
import Login from './pages/Login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile', element: <Profile /> },
        { path: '/profile/edit', element: <EditProfile /> },
        { path: '/users', element: <Users /> },
        { path: '/users/:id', element: <User /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <Product /> },
        { path: '/orders', element: <Orders /> },
        { path: '/posts', element: <Posts /> },
        { path: '/notes', element: <Notes /> },
        { path: '/calendar', element: <Calendar /> },
        { path: '/charts', element: <Charts /> },
        { path: '/logs', element: <Logs /> },
      ],
      errorElement: <Error />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
