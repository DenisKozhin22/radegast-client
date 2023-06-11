export interface IBookingTimeSlot {
	id: string
}

export interface IBookingMeetingProps {
	day: string
	timeSlots: IBookingTimeSlot[]
}
