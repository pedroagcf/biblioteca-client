import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchAutores from '../../../actions/autoresAction';
import AutorList from '../../organisms/AutorList/AutorList';

const AutorPage = ({ autoresData, fetchAutores }) => {
  //   const [autores, setAutores] = useState([]);
  const { loading, data, error } = autoresData;

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchAutores();

      console.log('autor page');
    }
  }, [data, loading, error, fetchAutores]);

  return loading ? (
    <section className='autor-page'></section>
  ) : !data?.length ? (
    <span className='featured-products--none'></span>
  ) : data?.length ? (
    <section className='autor-page'>
      <AutorList autores={data} />
    </section>
  ) : (
    <span className='featured-products--none'></span>
  );
};

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAutores }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AutorPage);
