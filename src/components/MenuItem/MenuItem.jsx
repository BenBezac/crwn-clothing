import React from 'react';

import './MenuItem.scss';
import {useTranslation} from "react-i18next";

const MenuItem = ({title, imageUrl, size}) => {
    const {t, i18n} = useTranslation();

    return (
        <div
            className={`${size} menu-item`}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
            <div className="content">
                <h1 className="title">{t(`menu-item-types.${title}`).toUpperCase()}</h1>
                <span className="subtitle">{t('shop-now').toUpperCase()}</span>
            </div>
        </div>
    );
};

export default MenuItem;
