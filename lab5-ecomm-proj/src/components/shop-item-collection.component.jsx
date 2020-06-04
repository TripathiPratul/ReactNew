import React from 'react';

import './shop-item-collection.styles.scss';

const ShopItemCollection = ( { title, items }) => (
    <div className="item-collecton">
            <div className="title"> { title }</div>
            <div className="item-card">
                {
                    items.map((item) =>(
                        <div key={item.id} > {item.name}
                        </div>
                    ))
                }
            </div>
    </div>
)

export default ShopItemCollection;