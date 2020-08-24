import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import deleteAutor from '../../../actions/autorItemAction';
import Button from '../../molecules/Button/Button';

import './AutorItem.scss';
const AutorItem = ({ autor, deleteAutor }) => {
  const { id, nome, anoNascimento, sexo, nacionalidade } = autor;

  const deleteAutorItem = () => {
    deleteAutor(id);
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
        <Button
          text='editar'
          // handleClick={deleteAutorItem}
          className='--edit'
        />
        <Button
          text='deletar'
          handleClick={deleteAutorItem}
          className='--delete'
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteAutor }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AutorItem);
