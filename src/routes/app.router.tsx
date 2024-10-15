import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { publicRoutes } from './routes';

export const AppRouter = () => {
  // public routes
  const publicRouter = createBrowserRouter([
    { path: '/', element: <Layout />, children: publicRoutes },
  ]);

  return <RouterProvider router={publicRouter} />;
};
