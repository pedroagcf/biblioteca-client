import React from 'react';
import { useFormik } from 'formik';

import sendEditora from '../../../actions/editoraFormAction';
import { showForm } from '../../../actions/showFormAction';

import './EditoraForm.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../molecules/Button/Button';
const EditoraForm = ({ sendEditora, showFormData, showForm }) => {
  const { opened } = showFormData;

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
    },
    onSubmit: (values, { resetForm }) => {
      sendEditora(values);
      resetForm({ values: '' });
    },
  });

  return (
    <form
      className={`editora-form${opened ? '--opened' : '--closed'}`}
      onSubmit={formik.handleSubmit}
    >
      <input
        id='nome'
        name='nome'
        type='text'
        placeholder='Nome'
        onChange={formik.handleChange}
        value={formik.values.nome}
      />
      <div className='editora-form__wrapper'>
        <button className='button--delete' type='button' onClick={displayForm}>
          fechar
        </button>
        <Button text='Enviar' type='submit' className='--edit' />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sendEditora, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditoraForm);
