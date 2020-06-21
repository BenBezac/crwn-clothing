import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector, Selector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import LanguageSwitcher from '../language-switcher/language-switcher.component';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { User } from '../../redux/user/types';
import { State } from '../../redux/root-reducer';

interface HeaderProps extends HeaderExpectedState {}

interface HeaderExpectedState {
    currentUser: User | null;
    hidden: boolean;
}

const Header: FC<HeaderProps> = ({ currentUser, hidden }) => {
    const { t } = useTranslation('header');

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
                <span className="version">
                    v.{process.env.REACT_APP_VERSION}
                </span>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    {t('shop').toUpperCase()}
                </Link>
                <Link className="option" to="/contact">
                    {t('contact').toUpperCase()}
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        {t('sign-out').toUpperCase()}
                    </div>
                ) : (
                    <Link className="option" to="/sign-in">
                        {t('sign-in').toUpperCase()}
                    </Link>
                )}
                <CartIcon />
                <LanguageSwitcher />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

const mapStateToProps: Selector<
    State,
    HeaderExpectedState
> = createStructuredSelector<State, HeaderExpectedState>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
