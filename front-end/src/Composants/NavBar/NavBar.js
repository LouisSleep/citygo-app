import React from "react";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import City from "../../Views/city/City";
import SignUp from "../../Views/auth/signup/SignUp";
import Login from "../../Views/auth/login/Login";
import logo from "../../Assets/svg/logo/logo.svg";
import ConnectedUser from "./ConnectedUser/ConnectedUser";
import UnConnectedUser from "./UnConnectedUser/UnConnectedUser";

export default function NavBar() {
  const navigate = useNavigate();

  const UserState = () => {
    if (localStorage.getItem("user") === undefined || localStorage.getItem("user") === null ) {
      return <UnConnectedUser />;
    } else {
      return <ConnectedUser />;
    }
  };

  return (
    <header className={style.headerNav}>
      <button className={style.headerButton} onClick={() => navigate("/")}>
        <img className={style.logoHeader} src={logo}></img>
        <h1 className={style.titleHeader}>City Go</h1>
      </button>
      {UserState()}
    </header>
  );
}
