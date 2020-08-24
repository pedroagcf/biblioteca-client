import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchLivros from '../../../actions/livrosAction';
import LivroList from '../../organisms/LivroList/LivroList';
import Button from '../../molecules/Button/Button';

import { showForm } from '../../../actions/showFormAction';
import LivroForm from '../../organisms/LivroForm/LivroForm';

import './LivrosPage.scss';
const LivrosPage = ({ livrosData, fetchLivros, showFormData, showForm }) => {
  const { loading, data, error } = livrosData;
  const { opened } = showFormData;

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchLivros();

      console.log('livros page');
    }
  }, [data, loading, error, fetchLivros]);

  return loading ? (
    <section className='livros-page'></section>
  ) : !data?.length ? (
    <section className='livros-page'>
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
      <LivroForm opened={opened} />
    </section>
  ) : data?.length ? (
    <section className='livros-page'>
      <LivroList livros={data} />
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
      <LivroForm opened={opened} />
    </section>
  ) : (
    <span className='livros-page--none'></span>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchLivros, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LivrosPage);
