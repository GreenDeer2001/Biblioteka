import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { auth } from "../firebase";
import { useBooksContext } from "../utilities/context";
import { useHistory } from "react-router-dom";

const loginText = {
  header: "Zaloguj się",
  bottom: "  Nie masz jeszcze konta ? ",
  bottomBtn: " Zarejestruj się!",
};
const registerText = {
  header: "Zarejestruj się",
  bottom: "Masz już konto ? ",
  bottomBtn: "Zaloguj się",
};

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [text, setText] = useState(loginText);
  const [typeLogin, setType] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setloginError] = useState(false);
  const history = useHistory();
  const { gotoAccount, setShowLoginForm, setGotoAccount } = useBooksContext();

  const submitHandler = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    setEmailError(false);
    setPasswordError(false);
    setloginError(false);
    if (typeLogin) {
      auth
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
          setShowLoginForm(false);
          gotoAccount && history.push("/konto");
        })
        .catch(() => {
          setloginError(true);
        });
    } else {
      console.log(emailValue, passwordValue);
      auth
        .createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((user) => {
          console.log(user);
          setShowLoginForm(false);
          gotoAccount && history.push("/konto");
        })
        .catch((err) => {
          console.log(err);
          if (err.code === "auth/email-already-in-use") {
            setEmailError(true);
          }
          if (err.code === "auth/weak-password") {
            setPasswordError(true);
          }
        });
    }
    document.getElementById("login__form").reset();
  };

  const toogleTypeHandler = () => {
    setEmailError(false);
    setPasswordError(false);
    setloginError(false);
    if (typeLogin) {
      setText(registerText);
    } else {
      setText(loginText);
    }
    setType((prev) => !prev);
  };
  return (
    <div className="backdrop">
      <div className="login">
        <div className="login__header">
          <h1 className="login__header-title">{text.header}</h1>
          <FaTimes
            className="login__header-icon"
            onClick={() => {
              setShowLoginForm(false);
              setGotoAccount(true);
            }}
          />
        </div>

        <form
          id="login__form"
          className="login__form"
          onSubmit={(e) => submitHandler(e)}
        >
          <span
            className={`login__form-input-box ${
              emailError && "email-error-text"
            }
             ${loginError && "login-error"}`}
          >
            <input
              ref={email}
              type="email"
              className={`login__form-input ${emailError && " error"}`}
              placeholder="Email"
              required
            />
          </span>
          <span
            className={`login__form-input-box ${
              passwordError && "password-error-text"
            }`}
          >
            <input
              ref={password}
              type="password"
              className={`login__form-input ${passwordError && " error"}`}
              placeholder="hasło"
              required
            />
          </span>
          <button type="submit" className="login__form-btn">
            {" "}
            Potwierdź
          </button>
        </form>
        <p className="login__toggle_type">
          {text.bottom}
          <span onClick={toogleTypeHandler} className="login__toggle_type-btn">
            {text.bottomBtn}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
