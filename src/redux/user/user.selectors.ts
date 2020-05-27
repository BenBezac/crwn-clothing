import { Selector, createSelector } from 'reselect';
import { State } from '../root-reducer';
import { UserState } from './types';

const selectUser: Selector<State, UserState> = (state: State) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user: UserState) => user.currentUser
);
