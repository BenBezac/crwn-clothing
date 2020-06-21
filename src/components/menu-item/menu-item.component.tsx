import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import { Section } from '../../pages/homepage/section.data';

interface MenuItemProps extends Section {}

const MenuItem: FC<MenuItemProps> = ({
    id,
    title,
    imageUrl,
    size,
    linkUrl,
}) => {
    const { t } = useTranslation();
    let history = useHistory();
    let match = useRouteMatch();

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

export default MenuItem;
