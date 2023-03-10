import React from "react";
import style from "./SignUpCard.module.css";
import CardWrapper from "../../CardWrapper/CardWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../Assets/input/Input";

interface JSONArray {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignUpCard() {
  const navigate = useNavigate();
  const [firstName, setFirtName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [mail, setMail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: mail,
        password: password,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/Login");
      })
      // let resJson = await res.json();
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(firstName);
  console.log(lastName);
  console.log(mail);
  console.log(password);
  return (
    <div className={style.SignUpModule}>
      <CardWrapper>
        <div className={style.CardSignUp}>
          <h2>SIGN UP</h2>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className={style.FormSignUp}
          >
            <label htmlFor="firstName" className={style.LabelInput}>
              First Name
              <input
                className={style.FirstNameInput}
                type="text"
                placeholder="Enter your first fame"
                onChange={(event) => setFirtName(event.target.value)}
                name="firstName"
              />
            </label>

            <label htmlFor="lastName" className={style.LabelInput}>
              Last Name
              <input
                className={style.LastNameInput}
                type="text"
                placeholder="Enter your last name"
                onChange={(event) => setLastName(event.target.value)}
                name="lastName"
              />
            </label>

            <label htmlFor="email" className={style.LabelInput}>
              E-mail
              <input
                className={style.EmailInput}
                type="mail"
                placeholder="Enter your e-mail"
                onChange={(event) => setMail(event.target.value)}
                name="email"
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
              <button className={style.SignupButton}>Sign Up</button>
              <button
                className={style.LoginButton}
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Already register? Log In!
              </button>
            </div>
          </form>
        </div>
      </CardWrapper>
    </div>
  );
}
