import React from "react";
import style from "./FooterCardWrapper.module.css";

export default function FooterCardWrapper({ children }) {
  return <div className={style.footerCardWrapper} >{children}</div>;
}
