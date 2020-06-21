import { SET_CURRENT_USER, User, UserActionTypes } from './types';

export const setCurrentUser = (user: User | null): UserActionTypes => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};
