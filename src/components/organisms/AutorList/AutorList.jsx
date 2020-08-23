import React from 'react';

import './AutorList.scss';
import AutorItem from '../AutorItem/AutorItem';

const AutorList = ({ autores }) => {
  return (
    <div className='autor-list__container'>
      {autores.map((autor) => (
        <AutorItem autor={autor} key={autor.id} />
      ))}
    </div>
  );
};

export default AutorList;
