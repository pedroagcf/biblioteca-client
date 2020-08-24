import React from 'react';

import './GeneroList.scss';
import GeneroItem from '../GeneroItem/GeneroItem';

const GeneroList = ({ generos }) => {
  return (
    <div className='genero-list__container'>
      {generos.map((genero) => (
        <GeneroItem genero={genero} key={genero.id} />
      ))}
    </div>
  );
};

export default GeneroList;
