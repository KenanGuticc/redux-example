export interface IUser {
  id: number
  fullName: string
  username: string
  email: string
  password: string
  acceptTerms: boolean
}

export type UserState = {
  users: IUser[]
}

export type UsersAction = {
  type: string
  user: IUser
}

export type DispatchType = (args: UsersAction) => UsersAction
