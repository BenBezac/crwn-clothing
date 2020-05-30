import {
    ADD_ITEM,
    CartItem,
    CartActionTypes,
    CartState,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    TOGGLE_CART_HIDDEN
} from './types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const initialState: CartState = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state: CartState = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };

        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };

        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem: CartItem) => cartItem.id !== action.payload.id
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;
