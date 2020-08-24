import React from 'react';

import LivroItem from '../../organisms/LivroItem/LivroItem';

import './LivroList.scss';
const LivroList = ({ livros }) => {
  return (
    <div className='livro-list__container'>
      {livros.map((livro) => (
        <LivroItem livro={livro} key={livro.id} />
      ))}
    </div>
  );
};

export default LivroList;
