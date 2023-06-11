import TableMeetingsAdmin from '@/components/TableMeetingsAdmin/TableMeetingsAdmin'
import TableMeetingsUser from '@/components/TableMeetingsUser/TableMeetingsUser'
import { useAuth } from '@/hooks/userHooks/useAuth'
import { Box, Container, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const User: FC = () => {
	const user = useAuth()
	return (
		<Container
			maxW='1300px'
			minH='full'
			p='3'>
			<Box display='flex' flexDirection='column'  height='full' rounded='md' p='4'>
				<Heading textAlign='center' as='h2' size='lg' mb='4'>
					{user?.name}
				</Heading>
				{user?.isAdmin ? <TableMeetingsAdmin /> : <TableMeetingsUser />}
			</Box>
		</Container>
	)
}

export default User
