/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import Button from '../components/Button/Button';
import Header from '../components/Header/Header';

import facebook from '../assets/img/FacebookLogo.svg';
import google from '../assets/img/GoogleLogo.svg';
import { NavLink, Redirect } from 'react-router-dom';
import EmailConfirmation from './EmailConfirmation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [coupon, setCoupon] = useState(false);

  const [valid, setValid] = useState(true);
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isReg, setIsReg] = useState(false);

  const regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

  function checkDataToLogin() {
    if (email.trim() !== '' && password !== '' && name.trim() !== '') {
      if (regExpEmail.test(email.toLowerCase())) {
        setIsEmailValid(true);
        setError('');
        setValid(true);
        setIsReg(true);
      } else {
        setIsEmailValid(false);
        setValid(true);
        setError('Возможно вы ошиблись в указании почтового сервиса');
      }
    } else {
      setError('Введите все данные');
      setValid(false);
    }
  }

  return (
    <div>
      <Header type='reg' />

      <div className='auth-content content'>
        <h1>Регистрация</h1>
        <span>Зарегистрируйся и получи доступ к аналитике аккаунтов. </span>
        <div className='auth-content-btns'>
          <Button icon={facebook} class='social-button'>
            Войти через Facebook
          </Button>

          <Button icon={google} class='social-button'>
            Войти через Google
          </Button>
        </div>
        <span>или</span>
        <div className='content-inputs'>
          <input
            onChange={(e) => setName(e.target.value)}
            className={!valid ? 'wrong' : ''}
            type='text'
            value={name}
            placeholder='Имя'
            required
          />
          <input
            className={!isEmailValid || !valid ? 'wrong' : ''}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            value={email}
            placeholder='Email'
            required
          />
          {!isEmailValid && <p className='error'>{error}</p>}
          <input
            className={!valid ? 'wrong' : ''}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            placeholder='Пароль'
            required
          />

          {!coupon ? (
            <a onClick={() => setCoupon(true)}>У меня есть промокод</a>
          ) : (
            <input type='text' placeholder='Промокод' />
          )}

          {error && isEmailValid && <p className='error'>{error}</p>}
        </div>
        <Button class='blue-button' onClick={checkDataToLogin}>
          Создать аккаунт
        </Button>
        Создавая аккаунт, я согласен с <a>условиями оферты</a>
      </div>

      {isReg && (
        <Redirect
          to={{
            pathname: '/confirmation',
            state: { name: name, email: email },
          }}
        />
      )}
    </div>
  );
}
