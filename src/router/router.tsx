import { createBrowserRouter } from 'react-router-dom';
import Todo from '../components/Tasks/todo';
import { Auth } from '../pages/auth/auth';
import { Registr } from '../pages/auth/registr/registr';
import { Home } from '../pages/home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/registr',
    element: <Registr />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
]);
