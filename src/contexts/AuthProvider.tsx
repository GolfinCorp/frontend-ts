import jwt from 'jwt-decode';
import { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '@/helpers/localStorage';
import { UserI, PropChildrenT } from '@/types';
import { AuthContextT } from './types.context';
export const AuthContext = createContext<AuthContextT | {}>({});
const AuthProvider = ({ children }: PropChildrenT) => {
	const [user, setUser] = useState<UserI | null>(null);
	const [authToken, setAuthToken] = useState<string>('');

	const data = {
		user,
		setUser,
		authToken,
		setAuthToken
	};

	useEffect(() => {
		let token = getLocalStorage('accessToken');

		if (!token) return;
		const user: UserI = jwt(token);
		setUser(user);
		setAuthToken(token);
	}, []);

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
