import React from 'react';
import { Link } from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import LanguageSwitcher from '../language-switcher/language-switcher.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
    const { t } = useTranslation();

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
                    {t('header.shop').toUpperCase()}
                </Link>
                <Link className="option" to="/contact">
                    {t('header.contact').toUpperCase()}
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        {t('header.sign-out').toUpperCase()}
                    </div>
                ) : (
                    <Link className="option" to="/sign-in">
                        {t('header.sign-in').toUpperCase()}
                    </Link>
                )}
                <CartIcon />
                <LanguageSwitcher />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
