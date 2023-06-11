import { useMutation } from 'react-query'

import { ILoginProps } from '@/types/request/ILoginProps'
import { AuthService } from '@/services/Auth.service'
import { useGetUser } from './useGetUser'
import { useActions } from '../useActions'

export const useLogin = () => {
	const { refetcUserData } = useGetUser()
	const { setUserData } = useActions()
	const { mutateAsync } = useMutation('login', (data: ILoginProps) => AuthService.login(data), {
		onSuccess: ({ data }) => {
			refetcUserData()
		},
	})

	return { login: mutateAsync }
}
