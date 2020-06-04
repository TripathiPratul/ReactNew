import React from 'react';
import ShopItem from './shop-item.component';

import './shop-item-collection.styles.scss';

const ShopItemCollection = ( { title, items }) => (
    <div className="item-collecton">
            <div className="title"> { title }</div>
            <div className="item-card">
                {
                    items.map(({id, ...otherProps}) =>(
                        <ShopItem key={id} {...otherProps} />
                    ))
                }
            </div>
    </div>
)

export default ShopItemCollection;