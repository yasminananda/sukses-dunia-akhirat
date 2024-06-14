import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Frame1 from './pages/Frame1';
import Header from './pages/Header';
import SingleItem from './pages/SingleItem';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Frame1', element: <Frame1 /> },
{ path: '/Header', element: <Header /> },
{ path: '/SingleItem', element: <SingleItem /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}