export interface CartItem {
    id: number,
    name: string
    quantity: number,
    price: number,
    imageUrl: string
}

export interface CartState {
    hidden: boolean,
    cartItems: Array<CartItem>,
}

export const TOGGLE_CART_HIDDEN= 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM= 'ADD_ITEM';
export const REMOVE_ITEM= 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART= 'CLEAR_ITEM_FROM_CART';

interface ToggleCartHiddenAction {
    type: typeof TOGGLE_CART_HIDDEN
    payload: CartItem
}

interface AddItemAction {
    type: typeof ADD_ITEM
    payload: CartItem
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM
    payload: CartItem
}

interface ClearItemFromCartAction {
    type: typeof CLEAR_ITEM_FROM_CART
    payload: CartItem
}

export type CartActionTypes = ToggleCartHiddenAction | AddItemAction | RemoveItemAction | ClearItemFromCartAction
