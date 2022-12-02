import { RouteI } from '@/types/routes/routes';
import { DashboardLayout } from '@/components/organisms';
import { NoMatch } from '@/components/atoms';
import Dashboard from './dashboard/Dashboard';
import Members from './members/Members';
import History from './history/History';

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
		path: 'history',
		element: History
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
