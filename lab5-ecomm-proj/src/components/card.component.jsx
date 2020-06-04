import React from 'react';

import './card.styles.scss';

const Card = ({ title, imageUrl, size }) => (
    <div className={`${size} card`}>
        <div 
        className='background-image'
        style= {{
            backgroundImage: `Url(${imageUrl})`
        }}>
        </div>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
)

export default Card;