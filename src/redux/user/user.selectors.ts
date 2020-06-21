import { createSelector, OutputSelector, Selector } from 'reselect';
import { State } from '../root-reducer';
import { User, UserState } from './types';

const selectUser: Selector<State, UserState> = (state: State) => state.user;

export const selectCurrentUser: OutputSelector<
    State,
    User | null,
    (res: UserState) => User | null
> = createSelector<State, UserState, User | null>(
    [selectUser],
    (user: UserState) => user.currentUser
);
