import React from "react";
import style from "./SignUpCard.module.css";
import CardWrapper from "../../CardWrapper/CardWrapper";
import { useState } from "react";
import Input from "../../../Assets/input/Input";

type User = {
  input: string;
};
export default function SignUpCard() {
  const [inputChangeFirstName, setInputChangeFirstName] = useState<User>();
  const [inputChangeLastName, setInputChangeLastName] = useState<User>();
  const [inputChangePassword, setInputChangePassword] = useState<User>();

  console.log(inputChangeFirstName);
  console.log(inputChangeLastName);
  console.log(inputChangePassword);
  return (
    <>
      <CardWrapper>
        <div>SIGN UP</div>
        <form method="POST">
          <label htmlFor="">
            First Name
            <Input
              className={style.FirstNameInput}
              type="text"
              placeHolder="First Name"
              onChangeFunction={(event) =>
                setInputChangeFirstName(event.target.value)
              }
            />
          </label>

          <label htmlFor="">
            Last Name
            <Input
              className={style.LastNameInput}
              type="text"
              placeHolder="Last Name"
              onChangeFunction={(event) =>
                setInputChangeLastName(event.target.value)
              }
            />
          </label>

          <label htmlFor="">
            Password
            <Input
              className={style.PasswordInput}
              type="password"
              placeHolder="Password"
              onChangeFunction={(event) =>
                setInputChangePassword(event.target.value)
              }
            />
          </label>
        </form>
      </CardWrapper>
    </>
  );
}
