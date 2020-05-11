import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom.button';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
    const { t } = useTranslation();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(
                        cartItem => <CartItem key={cartItem.id} item={cartItem}/>
                    )
                }
            </div>
            <CustomButton>
                {t('cart.go-to-checkout').toUpperCase()}
            </CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
