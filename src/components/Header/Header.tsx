import { Box, Button, Container, Heading, useToast } from '@chakra-ui/react'
import { FC } from 'react'
import Menu from '../Menu/Menu'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/userHooks/useAuth'

const Header: FC = () => {
	const user = useAuth()
	const { push } = useRouter()
	const toast = useToast()
	return (
		<Box
			as='header'
			bgImage='/header-bg.png'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			backgroundPosition='center'
			minH='100vh'>
			<Menu />
			<Container maxW='1300px'>
				<Heading
					as='h1'
					fontSize={['30px', '50px', '70px']}
					maxW='624px'
					mx='auto'
					textAlign='center'
					fontWeight={400}
					mt={210}
					mb={117}>
					Открой для себя Мир Музыки
				</Heading>
				<Button
					onClick={() =>
						user
							? push('/record')
							: toast({
									title: 'Для начала в аккаунт!',
									status: 'info',
									duration: 5000,
									isClosable: true,
									position: 'top'
							  })
					}
					variant='main'
					size='md'
					mx='auto'
					display='block'>
					Записаться
				</Button>
			</Container>
		</Box>
	)
}

export default Header
