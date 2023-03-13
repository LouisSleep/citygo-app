import React from "react";
import style from "./../NavBar.module.css";
import { useNavigate } from "react-router-dom";

export default function ConnectedUser() {
  const navigate = useNavigate();

  const unLog = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };
  return (
    <>
      <nav className={style.navbarSection}>
        <button className={style.navButton} onClick={unLog}>
          UnLog
        </button>
      </nav>
    </>
  );
}
