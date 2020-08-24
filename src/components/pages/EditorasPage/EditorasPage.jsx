import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchEditoras from '../../../actions/editorasAction';
import EditoraList from '../../organisms/EditoraList/EditoraList';
import { showForm } from '../../../actions/showFormAction';

import './EditorasPage.scss';
import Button from '../../molecules/Button/Button';
import EditoraForm from '../../organisms/EditoraForm/EditoraForm';
const EditoraPage = ({
  editorasData,
  fetchEditoras,
  showFormData,
  showForm,
}) => {
  const { loading, data, error } = editorasData;
  const { opened } = showFormData;

  const displayForm = () => {
    console.log('show form');
    showForm();
  };

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchEditoras();

      console.log('editora page');
    }
  }, [data, loading, error, fetchEditoras]);

  return loading ? (
    <section className='editora-page'></section>
  ) : !data?.length ? (
    <section className='editora-page'>
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
    </section>
  ) : data?.length ? (
    <section className='editora-page'>
      <EditoraList editoras={data} />
      <Button text='cadastrar' handleClick={displayForm} className='--main' />
      <EditoraForm opened={opened} />
    </section>
  ) : (
    <span className='editora--none'></span>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchEditoras, showForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditoraPage);
