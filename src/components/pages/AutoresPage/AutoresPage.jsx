import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchAutores from '../../../actions/autoresAction';
import AutorList from '../../organisms/AutorList/AutorList';
import Button from '../../molecules/Button/Button';
import { showForm } from '../../../actions/showFormAction';
import AutorForm from '../../organisms/AutorForm/AutorForm';

import './AutoresPage.scss';
const AutoresPage = ({ autoresData, fetchAutores, showFormData, showForm }) => {
  const { loading, data, error } = autoresData;
  const { opened } = showFormData;

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchAutores();

      console.log('autor page');
    }
  }, [data, loading, error, fetchAutores]);

  return loading ? (
    <section className='autores-page'></section>
  ) : !data?.length ? (
    <section className='autores-page'>
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
      <AutorForm opened={opened} />
    </section>
  ) : data?.length ? (
    <section className='autores-page'>
      <AutorList autores={data} />
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
      <AutorForm opened={opened} />
    </section>
  ) : (
    <span className='featured-products--none'></span>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAutores, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoresPage);
