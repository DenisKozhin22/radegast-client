import { useAuth } from '@/hooks/userHooks/useAuth'
import { useLogout } from '@/hooks/userHooks/useLogout'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

const UserMenuButton: FC = () => {
	const user = useAuth()
	const { refetchLogout } = useLogout()
	return (
		<Menu variant='user'>
			<MenuButton as={Button} variant='main' size='sm' rightIcon={<ChevronDownIcon />}>
				{user?.name}
			</MenuButton>
			<MenuList>
				<MenuItem>
					<Link href='/user'>{user?.isAdmin ? 'Просмотреть записи' : 'Мой профиль'}</Link>
				</MenuItem>
				{!user?.isAdmin && (
					<MenuItem>
						<Link href='/record'>Записаться</Link>
					</MenuItem>
				)}
				<MenuItem onClick={() => refetchLogout()}>Выйти</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default UserMenuButton
