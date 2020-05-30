import { CartItem } from './types';

export const addItemToCart = (
    cartItems: Array<CartItem>,
    cartItemToAdd: CartItem
): Array<CartItem> => {
    const existingCartItem = cartItems.find(
        (cartItem: CartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem: CartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
};

export const removeItemFromCart = (
    cartItems: Array<CartItem>,
    cartItemToRemove: CartItem
): Array<CartItem> => {
    const existingCartItem = cartItems.find(
        (cartItem: CartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return cartItems.filter(
                (cartItem: CartItem) => cartItem.id !== cartItemToRemove.id
            );
        }
        return cartItems.map((cartItem: CartItem) =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    } else {
        return cartItems;
    }
};
