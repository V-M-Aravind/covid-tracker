import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomePage from './pages/HomePage';
import { StoreProvider } from './store';
import LoadingPage from './pages/LoadingPage';
import RouteErrorPage from './pages/RouteErrorPage';

const WorldMapPage = lazy(() => import('./pages/WorldMapPage'));
const CountryInfoPage = lazy(() => import('./pages/CountryInfoPage'));

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <RouteErrorPage />,
  },
  {
    path: '/world-map',
    element: <WorldMapPage />,
  },
  {
    path: '/countries',
    element: <CountryInfoPage />,
    children: [
      {
        path: 'countries/:country',
        element: <div>India</div>,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </Suspense>
  );
}

export default App;
