export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: {
		email: string
		name: string
		id: string
		isAdmin: boolean
	}
}
