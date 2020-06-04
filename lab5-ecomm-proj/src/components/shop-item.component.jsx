import React from 'react';

import './shop-item.styles.scss';

const ShopItem = ( { imageUrl, name, price }) =>(
    <div className='shop-card'>
        <div className='image'
        style={{
            backgroundImage: `Url(${imageUrl})`
        }}
        ></div>
        <div className='card-footer'>
        <div className='name'>{ name }</div>
        <div className='price'>{ price }</div>
        </div>
    </div>
)

export default ShopItem;