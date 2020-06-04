import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.styles.scss';

const Card = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} card`}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(Card);