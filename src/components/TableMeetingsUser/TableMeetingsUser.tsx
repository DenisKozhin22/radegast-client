import { useGetMeetingsForUser } from '@/hooks/meetingHooks/useGetMeetingsForUser'
import { MeetingService } from '@/services/Meeting.service'
import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Button,
	Stack,
	Skeleton,
} from '@chakra-ui/react'
import { FC } from 'react'

const TableMeetingsUser: FC = () => {
	const { meetingsUser, refetchMeetingsUser, isLoadingMeeting } = useGetMeetingsForUser()
	console.log(meetingsUser)

	const cancelMeeting = async (day: string, id: string) => {
		try {
			if (new Date() < new Date(day)) {
				console.log(day, id)
				const data = {
					day,
					id,
				}
				await MeetingService.cancelMeeting(data)
				refetchMeetingsUser()
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<TableContainer height='full' overflowY='auto'>
			<Table
				size='sm'
				variant='simple'
				style={{
					borderCollapse: 'separate',
					borderSpacing: '0 10px',
				}}>
				<Thead>
					<Tr>
						<Th color='white' textAlign='center'>
							Дата
						</Th>
						<Th color='white' textAlign='center'>
							Время
						</Th>
						<Th color='white' textAlign='center'>
							Действие
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{meetingsUser?.map(meeting => (
						<Tr key={meeting.id}>
							<Td
								color='blackAlpha.900'
								borderLeftRadius='md'
								textAlign='center'
								width='33.33%'
								bg='yellow.300'
								border='none'>
								{meeting.day}
							</Td>
							<Td
								color='blackAlpha.900'
								textAlign='center'
								width='33.33%'
								bg='yellow.300'
								border='none'>
								{meeting.start}:00 - {meeting.end}:00
							</Td>
							<Td
								color='white'
								borderRightRadius='md'
								textAlign='center'
								width='33.33%'
								bg='yellow.300'
								border='none'>
								<Button
									variant='delete'
									fontWeight={400}
									// bg={new Date() > new Date(meeting.day) ? 'blackAlpha.900' : 'red'}
									size={['xs', 'sm']}
									onClick={() => cancelMeeting(meeting.day, meeting.id)}>
									{new Date() < new Date(meeting.day) ? 'Отменить' : 'Срок истёк'}
								</Button>
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
	)
}

export default TableMeetingsUser
