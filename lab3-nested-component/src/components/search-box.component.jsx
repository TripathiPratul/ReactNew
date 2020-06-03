import React from 'react';

import './search-box.styles.css';

export const SeacrhBox = ({ handleChange }) => (
   <input type="search" onChange={ handleChange} />
);