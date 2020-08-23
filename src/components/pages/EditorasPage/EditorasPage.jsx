import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchEditoras from '../../../actions/editorasAction';
import EditoraList from '../../organisms/EditoraList/EditoraList';

const EditoraPage = ({ editorasData, fetchEditoras }) => {
  const { loading, data, error } = editorasData;

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchEditoras();

      console.log('editora page');
    }
  }, [data, loading, error, fetchEditoras]);

  return loading ? (
    <section className='editora-page'></section>
  ) : !data?.length ? (
    <span className='editora--none'></span>
  ) : data?.length ? (
    <section className='editora-page'>
      <EditoraList editoras={data} />
    </section>
  ) : (
    <span className='editora--none'></span>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchEditoras }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditoraPage);
