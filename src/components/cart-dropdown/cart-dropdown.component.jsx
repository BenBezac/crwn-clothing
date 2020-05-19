import React from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButtonComponent from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const { t } = useTranslation();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">{t('cart.empty')}</span>
                )}
            </div>
            <CustomButtonComponent onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                {t('cart.go-to-checkout').toUpperCase()}
            </CustomButtonComponent>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
