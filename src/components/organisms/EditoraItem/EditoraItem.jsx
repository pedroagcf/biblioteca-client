import React from 'react';

import './EditoraItem.scss';

const EditoraItem = ({ editora }) => {
  // const {nome} = editora

  return (
    <div className='editora-item'>
      <p className='editora-item__name'>{editora.nome}</p>
    </div>
  );
};

export default EditoraItem;
