import { Box, Container, Heading, Input } from '@chakra-ui/react'
import { FC, useState, ChangeEvent } from 'react'

import RecordForm from '@/components/Forms/RecordForm/RecordForm'
const Record: FC = () => {
	return (
		<Container
			maxW='1300px'
			minH='full'
			p='3'>
			<Box display='flex' flexDirection='column'  minH='full' rounded='md' p='4'>
				<Heading textAlign='center' as='h2' size='lg'>
					Бронирование
				</Heading>
				<RecordForm />
			</Box>
		</Container>
	)
}

export default Record
