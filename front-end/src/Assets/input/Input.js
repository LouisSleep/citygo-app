import React from "react";
import style from "./Input.module.css";

export default function Input(props) {
  return (
    <>
      <input
        className={style.inputAsset}
        type={props.type}
        placeholder={props.placeHolder}
        onChange={props.onChangeFunction}
      ></input>
    </>
  );
}
