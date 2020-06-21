import React, { FC } from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import { useTranslation } from 'react-i18next';
import { BasicCartItem } from '../../../redux/cart/types';

interface CollectionPreviewProps {
    routeName: string;
    items: Array<BasicCartItem>;
}

const CollectionPreview: FC<CollectionPreviewProps> = ({
    routeName,
    items,
}) => {
    const { t } = useTranslation();
    return (
        <div className="collection-preview">
            <h1 className="title">
                {t(`collections.${routeName}`).toUpperCase()}
            </h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
