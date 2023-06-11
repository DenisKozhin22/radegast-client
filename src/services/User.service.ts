import { instance } from '@/Api'
import { IUser } from '@/types/IUser'
import { AxiosResponse } from 'axios'

export const UserService = {
	async getUser(): Promise<AxiosResponse<IUser>> {
		return instance.get<IUser>('/auth/user')
	},
}
