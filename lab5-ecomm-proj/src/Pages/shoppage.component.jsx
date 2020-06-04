import React from 'react';
import ShopItemCollection from '../components/shop-item-collection.component';

import SHOP_ITEMS from '../mock/shopdata';

export class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            shopItems: SHOP_ITEMS
        } 
    }

    render(){
        const { shopItems } = this.state;
        return <div>
            {
                shopItems.map(({id, ...restProps}) => (
                    <ShopItemCollection key={id} {...restProps} />
                ))
            }
        </div>
        
    }
}