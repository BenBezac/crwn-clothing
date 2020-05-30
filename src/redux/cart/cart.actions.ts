import {ADD_ITEM, CartActionTypes, CartItem, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, TOGGLE_CART_HIDDEN} from "./types";

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = (itemToAdd: CartItem): CartActionTypes => ({
    type: ADD_ITEM,
    payload: itemToAdd,
});

export const removeItem = (itemToRemove: CartItem): CartActionTypes => ({
    type: REMOVE_ITEM,
    payload: itemToRemove,
});

export const clearItemFromCart = (itemToClear: CartItem): CartActionTypes => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: itemToClear,
});
