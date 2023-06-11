import { instance } from '@/Api'
import { AxiosResponse } from 'axios'

import { IBookingMeetingProps } from '@/types/IBookingMeetingProps'
import { ICancelMeeting } from '@/types/ICancelMeeting'
import { IMeetingsResponseAdmin } from '@/types/response/IMeetingsResponseAdmin'
import { IMeetingsResponseUser } from '@/types/response/IMeetingsResponseUser'
import { ITimeSlotResponse } from '@/types/response/ITimeSlotResponse'

export const MeetingService = {
	async getTimeSlots(day: string): Promise<AxiosResponse<ITimeSlotResponse[]>> {
		return instance.get<ITimeSlotResponse[]>(`/meetings/days/${day}`)
	},
	async getITimeSlotsForAdmin(day: string): Promise<AxiosResponse<IMeetingsResponseAdmin[]>> {
		return instance.get<IMeetingsResponseAdmin[]>(`/meetings/admin/${day}`)
	},
	async getTimeSlotsForUser(): Promise<AxiosResponse<IMeetingsResponseUser[]>> {
		return instance.get<IMeetingsResponseUser[]>(`/meetings/meetings-list`)
	},
	async bookingMeeting(data: IBookingMeetingProps): Promise<AxiosResponse<ITimeSlotResponse[]>> {
		return instance.post<ITimeSlotResponse[]>('/meetings/booking-meeting', data)
	},
	async cancelMeeting(data: ICancelMeeting): Promise<AxiosResponse<ITimeSlotResponse[]>> {
		return instance.post<ITimeSlotResponse[]>(`/meetings/cancel-meeting/`, data)
	},
}
