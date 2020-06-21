import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createStructuredSelector, Selector } from 'reselect';

import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

import CustomButton from '../../form/custom-button/custom.button.component';
import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';

import {
    BasicCartState,
    CartActionTypes,
    CartItem,
} from '../../../redux/cart/types';
import { Dispatch } from 'redux';
import { State } from '../../../redux/root-reducer';

interface CartDropdownProps {
    cartItems: Array<CartItem>;
    toggleCartHidden: Function;
}

const CartDropdown: FC<CartDropdownProps> = ({
    cartItems,
    toggleCartHidden,
}) => {
    let history = useHistory();
    const { t } = useTranslation('cart');
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((cartItem) => (
                        <CartDropdownItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">{t('empty')}</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    toggleCartHidden();
                }}
            >
                {t('go-to-checkout').toUpperCase()}
            </CustomButton>
        </div>
    );
};

const mapStateToProps: Selector<
    State,
    BasicCartState
> = createStructuredSelector<State, BasicCartState>({
    cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
