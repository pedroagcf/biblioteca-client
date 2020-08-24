import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

import sendAutor from '../../../actions/autorFormAction';
import { showForm } from '../../../actions/showFormAction';

import './AutorForm.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../molecules/Button/Button';
const AutorForm = ({ sendAutor, showFormData, showForm }) => {
  const { opened } = showFormData;

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      anoNascimento: '',
      sexo: '',
      nacionalidade: '',
    },
    onSubmit: (values, { resetForm }) => {
      sendAutor(values);
      resetForm({ values: '' });
    },
  });

  return (
    <form
      className={`autor-form${opened ? '--opened' : '--closed'}`}
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
      <input
        id='anoNascimento'
        name='anoNascimento'
        type='text'
        placeholder='Ano de Nascimento'
        onChange={formik.handleChange}
        value={formik.values.anoNascimento}
      />
      <input
        id='sexo'
        name='sexo'
        type='text'
        placeholder='Sexo'
        onChange={formik.handleChange}
        value={formik.values.sexo}
      />

      <input
        id='nacionalidade'
        name='nacionalidade'
        type='text'
        placeholder='Nacionalidade'
        onChange={formik.handleChange}
        value={formik.values.nacionalidade}
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
  return bindActionCreators({ sendAutor, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AutorForm);
