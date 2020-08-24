import React from 'react';
import { useFormik } from 'formik';

import sendGenero from '../../../actions/generoFormAction';
import { showForm } from '../../../actions/showFormAction';

import './GeneroForm.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../molecules/Button/Button';
const GeneroForm = ({ sendGenero, showFormData, showForm }) => {
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
      sendGenero(values);
      resetForm({ values: '' });
    },
  });

  return (
    <form
      className={`genero-form${opened ? '--opened' : '--closed'}`}
      onSubmit={formik.handleSubmit}
    >
      <input
        id='nome'
        name='nome'
        type='text'
        placeholder='Genero'
        onChange={formik.handleChange}
        value={formik.values.nome}
      />
      <div className='autor-form__wrapper'>
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
  return bindActionCreators({ sendGenero, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneroForm);
