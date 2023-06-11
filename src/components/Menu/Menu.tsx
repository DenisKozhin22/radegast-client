import { FC } from 'react'
import Burger from '../Burger/Burger'
import NextLink from 'next/link'
import { Box, Button, Container, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'
import AuthModal from '../AuthModal/AuthModal'
import { useAuth } from '@/hooks/userHooks/useAuth'
import UserMenuButton from '../UserMenuButton/UserMenuButton'

const Menu: FC = () => {
	const user = useAuth()
	return (
		<Container maxW='1300px'>
			<Box pt='37px'>
				<Flex justifyContent='space-between' alignItems='center'>
					{/* <Burger /> */}
					{/* <Link as={NextLink} href='#' fontWeight={700} fontSize={20}>
							Г. Канск. ул. 40 лет Октября, 3
						</Link> */}
					<Link as={NextLink} href='/'>
						<Image src='/logo.png' alt='logo' width={160} height={35} />
					</Link>
					{/* <Link as={NextLink} href='#' fontWeight={700} fontSize={20}>
							8 924 616-04-54
						</Link> */}
					{user ? <UserMenuButton /> : <AuthModal />}
				</Flex>
			</Box>
		</Container>
	)
}

export default Menu
