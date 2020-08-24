import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import deleteLivro from '../../../actions/livroItemAction';
import Button from '../../molecules/Button/Button';
import { showForm } from '../../../actions/showFormAction';

import './LivroItem.scss';
const LivroItem = ({ livro, deleteLivro, showForm }) => {
  const { id, titulo } = livro;
  const history = useHistory();

  const deleteAutorItem = () => {
    deleteLivro(id);
  };

  const updateAutorItem = () => {
    history.push(`livro/${id}`);
    showForm();
  };

  return (
    <div className='livro-item'>
      <div className='livro-item__info'>
        <p className='livro-item__info__id'>{id}</p>
        <p className='livro-item__info__titulo'>{titulo}</p>
      </div>
      <div className='button-wrapper'>
        <Button
          text='editar'
          handleClick={updateAutorItem}
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
  return bindActionCreators({ deleteLivro, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LivroItem);
