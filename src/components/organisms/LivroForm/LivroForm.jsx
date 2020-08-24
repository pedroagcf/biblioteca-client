import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import sendLivro, { updateLivro } from '../../../actions/livroFormAction';
import { showForm } from '../../../actions/showFormAction';

import './LivroForm.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../molecules/Button/Button';
const LivroForm = ({ livrosData, sendLivro, showFormData, showForm }) => {
  const { data } = livrosData;
  const { opened } = showFormData;
  const { livroId } = useParams();

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
    },
    onSubmit: (values, { resetForm }) => {
      const livros = data.filter((livro) => livro.id == livroId);
      if (livros.length > 0) {
        updateLivro(livroId, values);
        console.log('update');
      } else {
        sendLivro(values);
        console.log('send');
      }
      resetForm({ values: '' });
    },
  });

  return (
    <form
      className={`livro-form${opened ? '--opened' : '--closed'}`}
      onSubmit={formik.handleSubmit}
    >
      <input
        id='titulo'
        name='titulo'
        type='text'
        placeholder='Titulo'
        onChange={formik.handleChange}
        value={formik.values.titulo}
      />
      <input
        id='anoLancamento'
        name='anoLancamento'
        type='text'
        placeholder='Ano de Lançamento'
        onChange={formik.handleChange}
        value={formik.values.anoLancamento}
      />
      <input
        id='ID autor'
        name='autor'
        type='text'
        placeholder='Autor'
        onChange={formik.handleChange}
        value={formik.values.autor}
      />
      <input
        id='ID genero'
        name='genero'
        type='text'
        placeholder='Genero'
        onChange={formik.handleChange}
        value={formik.values.genero}
      />
      <input
        id='ID editora'
        name='editora'
        type='text'
        placeholder='Editora'
        onChange={formik.handleChange}
        value={formik.values.editora}
      />
      <div className='livro-form__wrapper'>
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
  return bindActionCreators({ sendLivro, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LivroForm);
