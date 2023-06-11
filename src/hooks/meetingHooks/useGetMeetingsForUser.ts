import { MeetingService } from '@/services/Meeting.service'
import { useQuery } from 'react-query'

export const useGetMeetingsForUser = () => {
	const { data, refetch, isLoading } = useQuery('getMeetingsForUser', () =>
		MeetingService.getTimeSlotsForUser(),
	)

	return { meetingsUser: data?.data, refetchMeetingsUser: refetch, isLoadingMeeting: isLoading }
}
