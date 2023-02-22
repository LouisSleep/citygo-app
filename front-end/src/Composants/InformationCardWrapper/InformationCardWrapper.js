import React from 'react'
import style from "./InformationCardWrapper.module.css";

export default function InformationCardWrapper({children}) {
  return (
    <div className={style.informationCardWrapper}>{children}</div>
  )
}
