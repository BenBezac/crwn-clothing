import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';
import { useTranslation } from 'react-i18next';

const CollectionPreview = ({ routeName, items }) => {
    const { t } = useTranslation();
    return (
        <div className="collection-preview">
            <h1 className="title">
                {t(`collections.${routeName}`).toUpperCase()}
            </h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
