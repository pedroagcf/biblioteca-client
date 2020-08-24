import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchGeneros from '../../../actions/generosAction';
import { showForm } from '../../../actions/showFormAction';

import GeneroList from '../../organisms/GeneroList/GeneroList';
import Button from '../../molecules/Button/Button';
import GeneroForm from '../../organisms/GeneroForm/GeneroForm';

import './GeneroLiterarioPage.scss';
const GeneroLiterarioPage = ({
  generosData,
  fetchGeneros,
  showFormData,
  showForm,
}) => {
  const { loading, data, error } = generosData;
  const { opened } = showFormData;

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchGeneros();

      console.log('generos page');
    }
  }, [data, loading, error, fetchGeneros]);

  return loading ? (
    <section className='generos-literarios-page'></section>
  ) : !data?.length ? (
    <section className='generos-literarios-page'>
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
    </section>
  ) : data?.length ? (
    <section className='generos-literarios-page'>
      <GeneroList generos={data} />
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
      <GeneroForm opened={opened} />
    </section>
  ) : (
    <span className='generos-literarios--none'></span>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchGeneros, showForm }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneroLiterarioPage);
