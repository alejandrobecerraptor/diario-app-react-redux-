import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Alejandro",
    email: "nando@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("name necesitado");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email incorrecto");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log(
        "no son iguales las contraseñas y deben ser mayor a 5 caracteres"
      );
      return false;
    }
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola mundo</div>

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already Registered?
        </Link>
      </form>
    </>
  );
};
