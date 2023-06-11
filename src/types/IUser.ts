export interface IUser {
	_id: string
	name: string
	email: string
	passwordHash: string
	isAdmin?: boolean
}
