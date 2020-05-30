import {createSelector, Selector} from 'reselect';
import {State} from "../root-reducer";
import {CartState} from "./types";

const selectCart: Selector<State, CartState> = (state: State) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, { quantity, price }) => acc + quantity*price, 0)
);
