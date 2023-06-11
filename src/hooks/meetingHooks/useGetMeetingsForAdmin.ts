import { MeetingService } from '@/services/Meeting.service'
import { useMutation } from 'react-query'

export const useGetMeetingsForAdmin = () => {
	const { data, mutateAsync, isLoading } = useMutation('getMeetingsAdmin', (day: string) =>
		MeetingService.getITimeSlotsForAdmin(day),
	)

	return { getMeetings: mutateAsync, meetingsList: data?.data, isLoadingMeeting: isLoading }
}
