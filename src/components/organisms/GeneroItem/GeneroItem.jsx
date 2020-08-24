import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import deleteGenero from '../../../actions/generoItemAction';
import Button from '../../molecules/Button/Button';

import './GeneroItem.scss';
const GeneroItem = ({ genero, deleteGenero }) => {
  const { id, nome } = genero;

  const deleteGeneroItem = () => {
    deleteGenero(id);
  };

  return (
    <div className='genero-item'>
      <div className='genero-item__info'>
        <p className='genero-item__info__id'>{id}</p>
        <p className='genero-item__info__nome'>{nome}</p>
      </div>
      <div className='button-wrapper'>
        <Button text='editar' className='--edit' />
        <Button
          text='deletar'
          handleClick={deleteGeneroItem}
          className='--delete'
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteGenero }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneroItem);
