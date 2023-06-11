import { axiosClassic, instance } from '@/Api'
import { IAuthResponse } from '@/types/response/IAuthResponse'
import { ILoginProps } from '@/types/request/ILoginProps'
import { IRegisterProps } from '@/types/request/IRegisterProps'
import { AxiosResponse } from 'axios'

export const AuthService = {
	async login(data: ILoginProps): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('/auth/login', data)
	},
	async register(data: IRegisterProps): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('/auth/register', data)
	},
	async logout(): Promise<void> {
		return instance.post('/auth/logout')
	},
	async checkAuth(): Promise<AxiosResponse<IAuthResponse>> {
		return instance.get<IAuthResponse>('/auth/refresh')
	},
}
