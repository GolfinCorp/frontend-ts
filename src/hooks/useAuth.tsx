import { useContext } from 'react';
import jwt from 'jwt-decode';
import axiosInstance from '@/services/axios';
import { AuthContext } from '@/contexts';
import { setLocalStorage, deleteLocalStorage } from '@/helpers/localStorage';
import { useToastNotification } from '@/hooks';
import { CredentialsT, UserI } from '@/types';
import { AuthContextT } from '@/contexts/types.context';

const useAuth = () => {
	const { setAuthToken, setUser } = useContext(AuthContext) as AuthContextT;
	const { handleAsyncToast, handleErrorToast } = useToastNotification();
	const login = async (credentials: CredentialsT): Promise<UserI | void> => {
		try {
			const response = await handleAsyncToast(
				axiosInstance.post('/users/login/', credentials),
				{ title: 'Bienvenido', description: `${credentials.email}` },
				'Iniciando sesión'
			);
			const token = response.data.token;
			const user: UserI = jwt(token);

			setAuthToken(token);
			setUser(user);
			setLocalStorage('accessToken', token);
			return user;
		} catch (error) {
			handleErrorToast(error);
		}
	};

	const logout = async () => {
		setAuthToken('');
		setUser(null);
		deleteLocalStorage('accessToken');
		return true;
	};

	return { login, logout, ...useContext(AuthContext) };
};

export default useAuth;
