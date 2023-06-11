import TableMeetingsUser from '@/components/TableMeetingsUser/TableMeetingsUser'
import { useAuth } from '@/hooks/userHooks/useAuth'
import User from '@/screens/User/User'
import { NextPageAuth } from '@/types/AuthTypes'

const UserPage: NextPageAuth = () => {
	return <User />
}

UserPage.isOnlyUser = true

export default UserPage
