import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.sass';

import Button from '../Button/Button';

import logo from '../../assets/img/LiveDune.svg';

export default function Header(props) {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='Logo LiveDune' />
      </div>

      {props.type === 'login' && (
        <div className='header-btns'>
          <span>У вас нет аккаунта?</span>
          <NavLink to='/reg'>
            <Button class='blue-button'>Регистрация</Button>
          </NavLink>
        </div>
      )}

      {props.type === 'reg' && (
        <div className='header-btns'>
          <span>Уже есть аккаунт?</span>
          <NavLink to='/'>
            <Button class='blue-button'>Войти</Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
