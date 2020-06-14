import {createSelector, OutputSelector, Selector} from 'reselect';
import {State} from '../root-reducer';
import {CartItem, CartState} from './types';

const selectCart: Selector<State, CartState> = (state: State) => state.cart;

export const selectCartItems: OutputSelector<
    State,
    Array<CartItem>,
    (cart: CartState) => Array<CartItem>
> = createSelector<State, CartState, Array<CartItem>>(
    [selectCart],
    (cart: CartState) => cart.cartItems
);

export const selectCartItemsCount: OutputSelector<
    State,
    number,
    (cartItems: Array<CartItem>) => number
> = createSelector<State, Array<CartItem>, number>(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

export const selectCartHidden: OutputSelector<
    State,
    boolean,
    (cart: CartState) => boolean
> = createSelector<State, CartState, boolean>(
    [selectCart],
    (cart: CartState) => cart.hidden
);

export const selectCartTotal: OutputSelector<
    State,
    number,
    (cartItems: Array<CartItem>) => number
> = createSelector<State, Array<CartItem>, number>(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (acc, { quantity, price }) => acc + quantity * price,
            0
        )
);
