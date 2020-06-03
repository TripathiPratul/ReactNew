import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt='user' src={`https://robohash.org/${props.person.id}?set=set2&size=150x150`} />
        <h2>{ props.person.name }</h2>
        <h3>{ props.person.email }</h3>
    </div>
)