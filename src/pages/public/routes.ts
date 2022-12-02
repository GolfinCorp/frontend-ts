import { RouteI } from '@/types/routes/routes';
import Home from './home/Home';
import Auth from './auth/Auth';
import { NoMatch } from '@/components/atoms';
import Unauthorized from './unauthorized/Unauthorized';
const routes: RouteI[] = [
  {
    path: '/',
    element: Home
  },
  {
    path: 'login',
    element: Auth
  },
  {
    path: 'unauthorized',
    element: Unauthorized
  },
  {
    path: '*',
    element: NoMatch
  }
];

export default routes;
