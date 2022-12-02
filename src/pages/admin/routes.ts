import { RouteI } from '@/types/routes/routes';
import Dashboard from './dashboard/Dashboard';
import Members from './members/Members';
import { DashboardLayout } from '@/components/organisms';
import { NoMatch } from '@/components/atoms';

const routes: RouteI[] = [
  {
    path: '',
    element: Dashboard
  },
  {
    path: 'members',
    element: Members
  },
  {
    path: '*',
    element: NoMatch
  }
];

const wraper: RouteI = {
  path: '/admin',
  element: DashboardLayout
};

const AdminRoutes = { routes, wraper };
export default AdminRoutes;
