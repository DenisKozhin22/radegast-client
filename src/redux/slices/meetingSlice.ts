import { ITimeSlotResponse } from '@/types/response/ITimeSlotResponse'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IMeetingsState {
	meetings: ITimeSlotResponse[] | []
}
const initialState: IMeetingsState = {
	meetings: [],
}

const meetingsSlice = createSlice({
	name: 'meetings',
	initialState,
	reducers: {
		setMeetingsData: (state, action: PayloadAction<ITimeSlotResponse[]>) => {
			state.meetings = action.payload
		},
	},
})

export const meetingsActions = meetingsSlice.actions
export const meetingsReducer = meetingsSlice.reducer
