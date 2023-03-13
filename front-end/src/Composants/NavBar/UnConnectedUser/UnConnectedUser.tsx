import React from "react";
import style from "./../NavBar.module.css";
import { useNavigate } from "react-router-dom";

export default function UnConnectedUser() {
  const navigate = useNavigate();
  return (
    <>
      <nav className={style.navbarSection}>
        <button className={style.navButton} onClick={() => navigate("/Login")}>
          Login
        </button>
        <button className={style.navButton} onClick={() => navigate("/SignUp")}>
          Sign Up
        </button>
      </nav>
    </>
  );
}
