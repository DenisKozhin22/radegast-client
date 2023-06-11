import { useGetMeetingsForAdmin } from '@/hooks/meetingHooks/useGetMeetingsForAdmin'
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Skeleton,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import moment from 'moment'
import { ChangeEvent, FC, useState } from 'react'

const TableMeetingsAdmin: FC = () => {
	const [date, setDate] = useState<string>('')
	const { getMeetings, meetingsList, isLoadingMeeting } = useGetMeetingsForAdmin()

	const changeDate = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			setDate(moment(e.target.value).format('YYYY-MM-DD'))
			await getMeetings(moment(e.target.value).format('YYYY-MM-DD'))
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Box
			w='full'
			m='auto'
			height='full'
			p='4'
			borderRadius='lg'
			display='flex'
			flexDirection='column'
			alignItems='center'>
			<Box as='form' mb='4' w={['full', 'md']}>
				<FormControl>
					<FormLabel>Выберите дату</FormLabel>
					<Input type='date' variant='date' value={date} onChange={e => changeDate(e)} />
				</FormControl>
			</Box>
			{meetingsList && (
				<TableContainer height='full' w='full' overflowY='auto'>
					<Table size='sm' variant='simple' h='full'>
						<Thead>
							<Tr>
								<Th color='white' textAlign='center'>
									Дата
								</Th>
								<Th color='white' textAlign='center'>
									Время
								</Th>
								<Th color='white' textAlign='center'>
									Имя
								</Th>
								<Th color='white' textAlign='center'>
									Почта
								</Th>
								<Th color='white' textAlign='center'>
									Статус
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{meetingsList?.map((meeting, i) => (
								<Tr key={i}>
									<Td color='white' textAlign='center' width='20%'>
										{date}
									</Td>
									<Td color='white' textAlign='center' width='20%'>
										{meeting.start}:00 - {meeting.end}:00
									</Td>
									<Td color='white' textAlign='center' width='20%'>
										{meeting.clientName ? meeting.clientName : ' - '}
									</Td>
									<Td color='white' textAlign='center' width='20%'>
										{meeting.email ? meeting.email : ' - '}
									</Td>
									<Td
										color='white'
										bg={meeting.isAvailable ? 'green' : 'red'}
										textAlign='center'
										width='20%'>
										{meeting.isAvailable ? 'Свободно' : 'Занято'}
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
					{isLoadingMeeting && (
						<Stack width='100%' mt='5'>
							{[...Array(6)].map((_, i) => (
								<Skeleton key={i} height='56px' width='full' />
							))}
						</Stack>
					)}
				</TableContainer>
			)}
		</Box>
	)
}

export default TableMeetingsAdmin
