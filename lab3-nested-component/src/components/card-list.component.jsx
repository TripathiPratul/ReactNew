import React from 'react';
import { Card } from '../components/card.component';
import './card-list.styles.css';

export const CardList = props => {
   return <div className='card-list'> 
        {
          props.users.map(person => ( 
            <div key = {person.id} > 
                <Card person= {person} />
            </div>
          ))
        } 
    </div>;
};