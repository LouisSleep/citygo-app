import React from "react";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import City from "../../Views/city/City";
import SignUp from "../../Views/auth/signup/SignUp";
import Login from "../../Views/auth/login/Login";
import logo from "../../Assets/svg/logo/logo.svg";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <header className={style.headerNav}>
      <button className={style.headerButton} onClick={() => navigate("/")}>
        <img className={style.logoHeader} src={logo}></img>
        <h1 className={style.titleHeader} >City Go</h1>
      </button>
      <nav className={style.navbarSection}>
        <button className={style.navButton} onClick={() => navigate("/Login")}>
          Login
        </button>
        <button className={style.navButton} onClick={() => navigate("/SignUp")}>
          Sign Up
        </button>
      </nav>
    </header>
  );
}
