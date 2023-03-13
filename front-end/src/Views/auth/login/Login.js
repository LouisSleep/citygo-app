import React from "react";
import LogInCard from "../../../Composants/Auth/LogIn/LogInCard";
import style from "./Login.module.css";

export default function Login() {
  return (
    <>
      <div className={style.LogInPage}>
        <LogInCard />
      </div>
    </>
  );
}
