import React from 'react';
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
      <h3 className="auth__title">Register</h3>
      <form>
      <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autocomplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autocomplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">Already Registered?</Link>
      </form>
    </>
    )
}
