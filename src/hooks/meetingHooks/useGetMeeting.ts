import { useActions } from '../useActions'
import { MeetingService } from '@/services/Meeting.service'
import { useMutation } from 'react-query'

export const useGetMeeting = () => {
	const { setMeetingsData } = useActions()
	const { mutateAsync } = useMutation(
		'getMeetings',
		(day: string) => MeetingService.getTimeSlots(day),
		{
			onSuccess: ({ data }) => {
				setMeetingsData(data)
			},
		},
	)
	return { getMeetings: mutateAsync }
}
