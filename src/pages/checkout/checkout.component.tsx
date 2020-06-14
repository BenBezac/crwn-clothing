import React from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { connect } from 'react-redux';
import { createStructuredSelector, Selector } from 'reselect';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import { CartItem, CheckoutDesiredState } from '../../redux/cart/types';
import { State } from '../../redux/root-reducer';

interface CheckoutProps {
    cartItems: Array<CartItem>;
    total: number;
}

const CheckoutPage: React.FC<CheckoutProps> = ({ cartItems, total }) => {
    const { t }: UseTranslationResponse = useTranslation();

    return (
        <div className="checkout-page">
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
            {cartItems.map((cartItem: CartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">TOTAL: ${total}</div>
        </div>
    );
};

const mapStateToProps: Selector<
    State,
    CheckoutDesiredState
    > = createStructuredSelector<State, CheckoutDesiredState>({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
