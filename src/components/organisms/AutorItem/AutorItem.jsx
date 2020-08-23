import React from 'react';

import Button from '../../molecules/Button/Button';
import './AutorItem.scss';
const AutorItem = ({ autor }) => {
  const { id, nome, anoNascimento, sexo, nacionalidade } = autor;

  const showAutor = () => {
    console.log(autor);
  };

  return (
    <div className='autor-item'>
      <div className='autor-item__info'>
        <p className='autor-item__info__id'>{id}</p>
        <p className='autor-item__info__nome'>{nome}</p>
        <p className='autor-item__info__nasc'>{anoNascimento}</p>
        <p className='autor-item__info__sexo'>{sexo}</p>
        <p className='autor-item__info__naci'>{nacionalidade}</p>
      </div>
      <div className='button-wrapper'>
        <Button text='editar' handleClick={showAutor} className='--edit' />
        <Button text='deletar' handleClick={showAutor} className='--delete' />
      </div>
    </div>
  );
};

export default AutorItem;
