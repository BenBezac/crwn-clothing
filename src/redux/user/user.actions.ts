import { User, SET_CURRENT_USER, UserActionTypes} from "./types";

export const setCurrentUser = (user: User): UserActionTypes => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}
