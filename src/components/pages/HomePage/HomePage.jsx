import React from 'react';
import { useHistory } from 'react-router-dom';

import SlickCarousel from '../../organisms/SlickCarousel/SlickCarousel';

import './HomePage.scss';
import Button from '../../molecules/Button/Button';
const HomePage = () => {
  const history = useHistory();

  const goToLivrosPage = () => {
    history.push('/livro');
  };

  return (
    <section className='home-page'>
      <div className='home-page__container'>
        {/* <SlickCarousel /> */}
        <h1 className='home-page__container__title'>
          O maior acervo de livros voce encontra aqui
        </h1>
        <Button
          text='ver livros'
          handleClick={goToLivrosPage}
          className='--main'
        />
      </div>
    </section>
  );
};

export default HomePage;
