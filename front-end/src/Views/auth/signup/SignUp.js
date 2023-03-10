import React from "react";
import style from "./SignUp.module.css";
import SignUpCard from "../../../Composants/Auth/SignUp/SignUpCard";
export default function SignUp() {
  return (
    <>
      <div className={style.SignUpPage}>
        <SignUpCard />
      </div>
    </>
  );
}
