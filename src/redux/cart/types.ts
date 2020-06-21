export interface BasicCartItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}
export interface CartItem extends BasicCartItem {
    quantity: number;
}

export interface BasicCartState {
    cartItems: Array<CartItem>;
}

export interface CartState extends BasicCartState {
    hidden: boolean;
}

export interface CheckoutDesiredState extends BasicCartState {
    total: number;
}

export interface DesiredCartIconState {
    itemCount: number;
}

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';

interface ToggleCartHiddenAction {
    type: typeof TOGGLE_CART_HIDDEN;
}

interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: CartItem;
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: CartItem;
}

interface ClearItemFromCartAction {
    type: typeof CLEAR_ITEM_FROM_CART;
    payload: CartItem;
}

export type CartActionTypes =
    | ToggleCartHiddenAction
    | AddItemAction
    | RemoveItemAction
    | ClearItemFromCartAction;
