import React from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import CustomButtonComponent from '../custom-button/custom.button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
    const { t } = useTranslation();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButtonComponent>
                {t('cart.go-to-checkout').toUpperCase()}
            </CustomButtonComponent>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
