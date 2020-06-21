import React, { FC } from 'react';

import CustomButton from '../../form/custom-button/custom.button.component';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.actions';
import {
    BasicCartItem,
    CartActionTypes,
    CartItem,
} from '../../../redux/cart/types';
import { Dispatch } from 'redux';

interface CollectionItemProps {
    item: BasicCartItem;
    addItem: Function;
}

const CollectionItem: FC<CollectionItemProps> = ({ item, addItem }) => {
    const { t } = useTranslation('cart');
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                {t('add-to-cart')}
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
    addItem: (item: CartItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
