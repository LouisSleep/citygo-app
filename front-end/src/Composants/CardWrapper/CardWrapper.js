import React from 'react';
import style from './CardWrapper.module.css';

export default function CardWrapper({children}) {
  return (
    <div className={style.cardWrapper}>{children}</div>
  )
}
