import React from 'react';

import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom.button";
import {useTranslation} from "react-i18next";

const CartDropdown = () => {
    const {t} = useTranslation();
    return <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>{t('cart.go-to-checkout').toUpperCase()}</CustomButton>
    </div>;
};

export default CartDropdown;
