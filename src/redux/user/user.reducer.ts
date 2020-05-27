import {SET_CURRENT_USER, UserActionTypes, UserState} from './types';

const initialState: UserState = {
    currentUser: null,
};

const userReducer = (
    state = initialState,
    action: UserActionTypes
): UserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
