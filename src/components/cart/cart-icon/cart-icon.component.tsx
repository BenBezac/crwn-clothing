import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector, Selector } from 'reselect';

import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { State } from '../../../redux/root-reducer';
import {
    CartActionTypes,
    DesiredCartIconState,
} from '../../../redux/cart/types';
import { Dispatch } from 'redux';

interface CartIconProps {
    itemCount: number;
    toggleCartHidden: Function;
}

const CartIcon: FC<CartIconProps> = ({ itemCount, toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={() => toggleCartHidden()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapStateToProps: Selector<
    State,
    DesiredCartIconState
> = createStructuredSelector<State, DesiredCartIconState>({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
