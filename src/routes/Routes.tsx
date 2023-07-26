import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App, SellerApp } from '@/App';
import Home from '@pages/Home/Home';
import Cart from '@pages/Cart/Cart';
import Detail from '@pages/Detail/Detail';
import Payment from '@pages/Payment/Payment';
import Mypage from '@pages/Mypage/Mypage';
import SellerCenter from '@pages/Seller/SellerCenter';
import Upload from '@pages/Seller/Upload';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import NotFound from '@pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'product/:productId',
        element: <Detail />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'mypage',
        element: <Mypage />,
      },
    ],
  },
  {
    path: '/seller-center',
    element: <SellerApp />,
    children: [
      {
        path: '',
        element: <SellerCenter />,
      },
      {
        path: 'upload',
        element: <Upload />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);
