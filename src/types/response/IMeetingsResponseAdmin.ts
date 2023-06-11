export interface ITimeSlotAdmin {
	start: number
	end: number
	clientName: string
	isAvailable: boolean
}

export interface IMeetingsResponseAdmin {
	start: number
	end: number
	clientName: string
	email: string
	isAvailable: boolean
}
