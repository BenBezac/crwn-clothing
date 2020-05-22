import React from 'react';
import {useTranslation} from "react-i18next";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
    const {t} = useTranslation();

    return (<div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>{t('checkout.header.product')}</span>
            </div>
            <div className="header-block">
                <span>{t('checkout.header.description')}</span>
            </div>
            <div className="header-block">
                <span>{t('checkout.header.quantity')}</span>
            </div>
            <div className="header-block">
                <span>{t('checkout.header.price')}</span>
            </div>
            <div className="header-block">
                <span>{t('checkout.header.remove')}</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
    </div>)
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
