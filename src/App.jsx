import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomePage from './pages/HomePage';
import Loader from './components/Loader';
import { StoreProvider } from './store';

const WorldMapPage = lazy(() => import('./pages/WorldMapPage'));
const CountryInfoPage = lazy(() => import('./pages/CountryInfoPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
    <Suspense fallback={<Loader />}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </Suspense>
  );
}

export default App;
