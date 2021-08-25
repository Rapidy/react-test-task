/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Button from '../components/Button/Button';

import Header from '../components/Header/Header';

export default function EmailConfirmation(props) {
  const [isFailed, setIsFailed] = useState(false);

  function toggleConfirmation() {
    setIsFailed((prev) => !prev);
  }

  return (
    <div>
      <Header type='isReg' />

      {!isFailed ? (
        <div className='content confirmation-content'>
          <h1>Подтвердите ваш e-mail</h1>
          <span>
            {props.location.state ? props.location.state.name : 'Незнакомец'}, на ваш
            E-mail ({props.location.state ? props.location.state.email : 'не определен'})
            отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы
            активировать вашу учетную запись и получить 7 дней бесплатного доступа.
          </span>

          <Button class='blue-button'>Перейти к почте</Button>
          <a onClick={toggleConfirmation}>Мне не пришло письмо</a>
        </div>
      ) : (
        <div className='content confirmation-content'>
          <h1>Мне не пришло письмо</h1>
          <span>
            Письмо может прийти с задержкой в 5-10 минут. Также проверьте разные папки
            почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не
            пришло, повторите попытку или напишите об этом в тех.поддержку (
            <a className='email' href='mailto:support@livedune.ru'>
              support@livedune.ru
            </a>
            ) и мы активируем ваш аккаунт.
          </span>

          <div className='content-inputs'>
            <input type='email' placeholder='Введите почту' />
            <Button class='blue-button'>Отправить заново</Button>
          </div>

          <a onClick={toggleConfirmation}>Отменить</a>
        </div>
      )}
    </div>
  );
}
