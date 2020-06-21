import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
    addItem,
    clearItemFromCart,
    removeItem,
} from '../../redux/cart/cart.actions';
import { CartActionTypes, CartItem } from '../../redux/cart/types';

interface CheckoutItemProps {
    cartItem: CartItem;
    addItem: Function;
    clearItemFromCart: Function;
    removeItem: Function;
}

const CheckoutItem: FC<CheckoutItemProps> = ({
    cartItem,
    addItem,
    clearItemFromCart,
    removeItem,
}) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => clearItemFromCart(cartItem)}
            >
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
    removeItem: (item: CartItem) => dispatch(removeItem(item)),
    clearItemFromCart: (item: CartItem) => dispatch(clearItemFromCart(item)),
    addItem: (item: CartItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
