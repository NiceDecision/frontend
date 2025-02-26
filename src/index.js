import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
//import './asset/font/font.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
