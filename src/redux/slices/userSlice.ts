import { IUser } from '@/types/IUser'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserState {
	data: IUser | null
}

const initialState: IUserState = {
	data: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<IUser>) => {
			state.data = action.payload
		},
		logout: state => {
			state.data = null
		},
	},
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
