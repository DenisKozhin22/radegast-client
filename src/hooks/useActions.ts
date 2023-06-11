import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { userActions } from '@/redux/slices/userSlice'
import { meetingsActions } from '@/redux/slices/meetingSlice'

const rootActions = {
	...meetingsActions,
	...userActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
