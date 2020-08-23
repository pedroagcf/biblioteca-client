import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import './Header.scss';
const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>library on</h1>
      {/* <Button
        text='cadastrar'
        handleClick={goToCadastrar}
        className='--header'
      /> */}
      <ul className='header__list'>
        <li className='header__list__item'>
          <NavLink to='/autor'>autor</NavLink>
        </li>
        <li className='header__list__item'>
          <NavLink to='/editora'>editora</NavLink>
        </li>
        <li className='header__list__item'>
          <NavLink to='/genero'>genero</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
