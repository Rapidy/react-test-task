import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header/Header';
import Button from '../components/Button/Button';

import lockerIcon from '../assets/img/Locker.svg';
import envelopeIcon from '../assets/img/Envelope.svg';
import loaderIcon from '../assets/img/loading.gif';

export default function PassReset() {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const [error, setError] = useState('');
  const [valid, setValid] = useState(true);

  function checkEmail() {
    if (email.trim() !== '' && email === 'example@example.com') {
      setLoading(true);
      setError('');
      setValid(true);
      setTimeout(() => {
        setLoading(false);
        setIsReset(true);
      }, 2000);
    }

    if (email.trim() === '') {
      setError('Введите почту');
      setValid(false);
    }

    if (email.trim() !== '') {
      if (email !== 'example@example.com') {
        setValid(false);
        setError('Почта не найдена');
      }
    }
  }

  console.log(loading);

  return (
    <div>
      <Header />

      {!isReset ? (
        <div className='content locker-content'>
          <img src={lockerIcon} alt='Locker Icon' />
          <h2>Восстановить пароль</h2>
          <span>Введите e-mail, на который регистрировались ранее</span>

          <div className='content-inputs'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={!valid ? 'wrong' : ''}
              value={email}
              type='email'
              placeholder='Введите почту'
              disabled={loading}
              required
            />
            {error && <p className='error'>{error}</p>}
          </div>

          <Button icon={loading && loaderIcon} class='blue-button' onClick={checkEmail}>
            {!loading ? 'Отправить' : 'Отправка'}
          </Button>
          <NavLink to='/'>Отменить</NavLink>
        </div>
      ) : (
        <div className='content locker-content'>
          <img src={envelopeIcon} alt='Envelope Icon' />
          <h2>Письмо отправлено</h2>
          <span>На указанный вами e-mail было отправлено письмо для смены пароля</span>

          <NavLink to='/'>
            <Button class='blue-button'>Вернуться на главную</Button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
