import { useEffect, useCallback } from 'react';
import axiosInstance from '@/services/axios';
import { useAuth } from '@/hooks';

const useAxiosPrivate = () => {
	const { authToken } = useAuth();

	useEffect(() => {
		const requestIntercept = axiosInstance.interceptors.request.use(
			(config) => {
				if (config.headers && !config.headers?.Authorization) {
					config.headers.Authorization = `${authToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		return () => {
			axiosInstance.interceptors.request.eject(requestIntercept);
		};
	}, [authToken]);

	const get = useCallback(async (endpoint, ...args) => {
		const response = await axiosInstance.get(endpoint, ...args);
		return response;
	}, []);

	const post = useCallback(async (endpoint, ...args) => {
		const response = await axiosInstance.post(endpoint, ...args);
		return response;
	}, []);

	const patch = useCallback(async (endpoint, ...args) => {
		const response = await axiosInstance.patch(endpoint, ...args);
		return response;
	}, []);

	const axiosDelete = useCallback(async (endpoint, ...args) => {
		const response = await axiosInstance.delete(endpoint, ...args);
		return response;
	}, []);

	return { axiosPrivate: axiosInstance, get, post, patch, axiosDelete };
};

export default useAxiosPrivate;
