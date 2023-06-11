import { useQuery } from 'react-query'
import { useActions } from '../useActions'
import { AuthService } from '@/services/Auth.service'
export const useLogout = () => {
	const { logout } = useActions()
	const { refetch } = useQuery('logout', () => AuthService.logout(), {
		enabled: false,
		onSuccess() {
			logout()
		},
	})
	return { refetchLogout: refetch }
}
