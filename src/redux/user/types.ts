export interface User {
    id: number
    displayName: string,
    email: string,
    password: string
}

export interface UserState {
    currentUser: User | null
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER
    payload: User
}

export type UserActionTypes = SetCurrentUserAction
