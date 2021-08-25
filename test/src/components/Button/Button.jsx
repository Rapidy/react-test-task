import React from 'react';
import './button.sass';

export default function Button(props) {
  return (
    <button className={props.class} onClick={() => props.onClick && props.onClick()}>
      {props.icon && <img src={props.icon} alt='Social Media Icon' />}
      <p>{props.children}</p>
    </button>
  );
}
