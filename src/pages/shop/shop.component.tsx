import React, { FC } from 'react';
import SHOP_DATA, { ShopSection } from './shop.data';
import CollectionPreview from '../../components/collection/collection-preview/collection.preview';

const ShopPage: FC = () => {
    const collections: Array<ShopSection> = SHOP_DATA;
    return (
        <div className="shop-name">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default ShopPage;
