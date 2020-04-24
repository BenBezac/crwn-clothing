import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import { useTranslation } from 'react-i18next';
import {connect} from "react-redux";

const Header = ({ currentUser }) => {
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
            </div>
        </div>
    );
};

const mapToStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapToStateToProps)(Header);
