import React from 'react';

import './menu-item.styles.scss';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">
                    {t(`collections.${title}`).toUpperCase()}
                </h1>
                <span className="subtitle">{t('shop-now').toUpperCase()}</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
