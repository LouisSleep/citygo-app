import React from "react";
import style from "./SearchBar.module.css";
import Input from "../../Assets/input/Input.js";
import Search from "../../Assets/svg/icon/search.svg";
import { useState } from "react";

export default function SearchBar(props) {
  return (
    <form className={style.searchBarSection}>
      {/* <div className={style.headForm}>
        <h4>Where do you want to go ?</h4>
      </div> */}
      <div className={style.inputSection}>
        <Input
          type="text"
          placeHolder="Find your way..."
          onChangeFunction={props.inputSearch}
        />
        {/* <div className={style.validateButton}>
          <img src={Search}></img>
        </div> */}
      </div>
    </form>
  );
}
