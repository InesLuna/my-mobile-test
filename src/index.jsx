import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store';
import ErrorView from './pages/ErrorView';
import DetailView from './pages/DetailView';
import GeneralView from './pages/GeneralView';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralView />,
    errorElement: <ErrorView />,
  },
  {
    path: 'detail/:mobileId',
    element: <DetailView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
