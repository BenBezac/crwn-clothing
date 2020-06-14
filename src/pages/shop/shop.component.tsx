import React from 'react';
import SHOP_DATA, { ShopSection } from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection.preview';

const ShopPage: React.FC = () => {
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
