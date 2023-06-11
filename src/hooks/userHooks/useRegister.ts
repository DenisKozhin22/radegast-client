import { useMutation } from 'react-query'

import { AuthService } from '@/services/Auth.service'
import { IRegisterProps } from '@/types/request/IRegisterProps'
import { useGetUser } from './useGetUser'

export const useRegister = () => {
	const { refetcUserData } = useGetUser()
	const { mutateAsync } = useMutation(
		'register',
		(data: IRegisterProps) => AuthService.register(data),
		{
			onSuccess: () => {
				refetcUserData()
			},
		},
	)
	return { registration: mutateAsync }
}
