import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { meetingsReducer } from './slices/meetingSlice'

const rootReducer = combineReducers({
	user: userReducer,
	meetings: meetingsReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TypeRootState = ReturnType<typeof store.getState>
