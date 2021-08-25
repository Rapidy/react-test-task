import React, { useState } from 'react';

import Button from '../components/Button/Button';
import Header from '../components/Header/Header';

import facebook from '../assets/img/FacebookLogo.svg';
import google from '../assets/img/GoogleLogo.svg';
import { NavLink } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);
  const [error, setError] = useState('');

  function checkDataToLogin() {
    if (email.trim() !== '' && password !== '') {
      if (email !== 'example@example.com' || password !== 'password2021') {
        setError('Неверная почта или пароль');
        setValid(false);
      }
    }
    if (password === 'password2021' && email === 'example@example.com') {
      setError('');
      setValid(true);
      alert('Авторизован');
    }

    if (email.trim() === '' || password === '') {
      setError('Введите почту и пароль');
      setValid(false);
    }
  }

  return (
    <div>
      <Header type='login' />

      <div className='auth-content content'>
        <h1>Войти</h1>
        <span>Добро пожаловать, рады видеть вас снова 👋</span>

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
            className={!valid ? 'wrong' : ''}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            value={email}
            placeholder='Email'
            required
          />
          <input
            className={!valid ? 'wrong' : ''}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            placeholder='Пароль'
            required
          />
          {error && <p className='error'>{error}</p>}
        </div>

        <Button class='blue-button' onClick={checkDataToLogin}>
          Войти в аккаунт
        </Button>
        <NavLink to='/reset'>Забыли пароль?</NavLink>
      </div>
    </div>
  );
}
