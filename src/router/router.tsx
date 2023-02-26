import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Auth } from '../pages/auth/auth';
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
]);
