import { createBrowserRouter } from 'react-router-dom';
import Cashback from '../components/cashback/cashbox';
import Inventory from '../components/inventory/inventory';
import Market from '../components/market/market';
import Order from '../components/order/order';
import Report from '../components/report/report';
import Setting from '../components/setting/setting';
import Todo from '../components/Tasks/todo';
import Tender from '../components/tender/tender';
import Users from '../components/users/users';
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
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/cashbox',
    element: <Cashback />,
  },
  {
    path: '/clients',
    element: <Users />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
  {
    path: '/market',
    element: <Market />,
  },
  {
    path: '/report',
    element: <Report />,
  },
  {
    path: '/tender',
    element: <Tender />,
  },
  {
    path: '/setting',
    element: <Setting />,
  },
]);
