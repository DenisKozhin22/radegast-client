import {
	Box,
	Input,
	FormControl,
	FormLabel,
	CheckboxGroup,
	Grid,
	GridItem,
	Checkbox,
	Button,
} from '@chakra-ui/react'
import { ChangeEvent, FC, useState } from 'react'
import moment from 'moment'
import { useGetMeeting } from '@/hooks/meetingHooks/useGetMeeting'
import { useAppSelector } from '@/hooks/useAppSelector'
import { MeetingService } from '@/services/Meeting.service'
import { IBookingTimeSlot } from '@/types/IBookingMeetingProps'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'

const RecordForm: FC = () => {
	const router = useRouter()
	const { setMeetingsData } = useActions()

	const [timeSlotsArray, setTimeSlotsArray] = useState<IBookingTimeSlot[]>([])
	const [error, setError] = useState(false)

	const todayDate: string = moment().format('YYYY-MM-DD')
	const [date, setDate] = useState<string>('')

	const meetings = useAppSelector(state => state.meetings.meetings)
	const { getMeetings } = useGetMeeting()

	const changeDate = async (e: ChangeEvent<HTMLInputElement>) => {
		setDate(moment(e.target.value).format('YYYY-MM-DD'))
		getMeetings(moment(e.target.value).format('YYYY-MM-DD'))
	}

	const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const checked = e.target.checked
		if (checked) {
			setTimeSlotsArray([
				...timeSlotsArray,
				{
					id: value,
				},
			])
		} else {
			setTimeSlotsArray(timeSlotsArray.filter(item => item.id !== value))
		}
	}
	const onSubmit = async (timeSlotsArray: IBookingTimeSlot[], date: string) => {
		try {
			if (timeSlotsArray.length > 0) {
				console.log({
					day: date,
					timeSlots: timeSlotsArray,
				})
				const { data } = await MeetingService.bookingMeeting({
					day: date,
					timeSlots: timeSlotsArray,
				})
				setMeetingsData(data)
				router.push('/user')
			} else {
				setError(true)
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Box
			w={['full', 'sm', 'md']}
			m='auto'
			minH='sm'
			p='4'
			borderRadius='lg'
			display='flex'
			flexDirection='column'
			alignItems='center'>
			<Box
				as='form'
				mb='4'
				w='full'
				h='full'
				onSubmit={e => {
					e.preventDefault()
					onSubmit(timeSlotsArray, date)
				}}>
				<FormControl>
					<FormLabel>Выберите дату</FormLabel>
					<Input
						type='date'
						variant='date'
						value={date}
						min={todayDate}
						onChange={e => changeDate(e)}
					/>
					{meetings.length > 0 && <FormLabel>Выберите время</FormLabel>}
					{date && (
						<Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={2}>
							<CheckboxGroup>
								{meetings?.map((item, i) => (
									<GridItem key={i}>
										<Checkbox
											minW='full'
											value={item.id}
											onChange={e => handleChecked(e)}
											variant='meeting'>
											{`${item.start}:00 - ${item.end}:00`}
										</Checkbox>
									</GridItem>
								))}
							</CheckboxGroup>
						</Grid>
					)}
					{timeSlotsArray.length > 0 && (
						<Button
							type='submit'
							variant='main'
							size='sm'
							mt='4'
							mx='auto'
							display='block'
							py='2'
							px='5'
							w={['full', '250px']}
							h='auto'>
							Забронировать
						</Button>
					)}
				</FormControl>
			</Box>
		</Box>
	)
}

export default RecordForm
