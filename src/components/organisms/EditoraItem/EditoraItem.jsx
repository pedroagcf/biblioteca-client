import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import deleteEditora from '../../../actions/editoraItemAction';
import Button from '../../molecules/Button/Button';

import './EditoraItem.scss';
const EditoraItem = ({ editora, deleteEditora }) => {
  const { id, nome } = editora;

  const deleteEditoraItem = () => {
    deleteEditora(id);
  };

  return (
    <div className='editora-item'>
      <div className='autor-item__info'>
        <p className='editora-item__info__id'>{id}</p>
        <p className='editora-item__info__nome'>{nome}</p>
      </div>
      <div className='button-wrapper'>
        <Button text='editar' className='--edit' />
        <Button
          text='deletar'
          handleClick={deleteEditoraItem}
          className='--delete'
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteEditora }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditoraItem);
