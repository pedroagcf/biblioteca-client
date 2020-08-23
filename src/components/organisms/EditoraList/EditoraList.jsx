import React from 'react';

import './EditoraList.scss';
import EditoraItem from '../EditoraItem/EditoraItem';

const EditoraList = ({ editoras }) => {
  return (
    <div className='Editora-list__container'>
      {editoras.map((editora) => (
        <EditoraItem editora={editora} key={editora.id} />
      ))}
    </div>
  );
};

export default EditoraList;
