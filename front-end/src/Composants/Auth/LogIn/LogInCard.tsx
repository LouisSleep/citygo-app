import React from "react";
import style from "./LogInCard.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../../CardWrapper/CardWrapper";

export default function LogInCard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | undefined>();
  //   const [mail, setMail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await fetch("http://127.0.0.1:8000/api/user/login", {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className={style.LogInModule}>
      <CardWrapper>
        <div className={style.CardLogIn}>
          <h2>Log In</h2>
          <form
            method="POST"
            // onSubmit={handleSubmit}
            className={style.FormLogIn}
          >
            <label htmlFor="userName" className={style.LabelInput}>
              First Name or E-mail
              <input
                className={style.UserNameInput}
                type="text"
                placeholder="Enter your first fame or e-mail"
                onChange={(event) => setUserName(event.target.value)}
                name="userName"
              />
            </label>

            <label htmlFor="password" className={style.LabelInput}>
              Password
              <input
                className={style.PasswordInput}
                type="password"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
                name="password"
              />
            </label>
            <div className={style.CTALog}>
              <button className={style.SignupButton}>Log In</button>
              <button
                className={style.LoginButton}
                onClick={() => {
                  navigate("/SignUp");
                }}
              >
                New in there? Sign Up!
              </button>
            </div>
          </form>
        </div>
      </CardWrapper>
    </div>
  );
}
