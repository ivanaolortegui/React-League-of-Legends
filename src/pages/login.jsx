import React, { useState } from 'react'
import logo from '../assets/logo-lol-letters.png'

import './login.scss';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  Object.values(rest)[2] !== 'LABORATORIA' && (valid = false);

  return valid;
};

const Login = (props) => {

  const [imputs, setSubmit] = useState({
    firstName: null,
    email: null,
    password: null,
    formErrors: {
      firstName: "",
      email: "",
      password: ""
    }
  })
  const [errorMessage, setError] = useState(false)
  let { formErrors } = imputs;
  const handleSubmit = e => {
    e.preventDefault();
    if (formValid(imputs)) {
      setError(false)
      props.history.push('/home');
    } else {
      setError(true)
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let values = { ...imputs };
    switch (name) {
      case "firstName":
        values.firstName =
          value.length > 3 ? value : null;
        values.formErrors.firstName =
          value.length < 3 ? "Mínimo 3 caracteres requerido" : "";
        break;
      case "email":
        values.email =
          emailRegex.test(value) ? value : null;
        values.formErrors.email = emailRegex.test(value)
          ? ""
          : "Correo Invalido";
        break;
      case "password":
        values.password =
          value.length > 6 ? value : null;
        values.formErrors.password =
          value.length < 6 ? "Mínimo 6 caracteres requerido" : "";
        break;
      default:
        break;
    }
    setSubmit({ ...values });
  };

  return (
    <div className="wrapper">

      <form onSubmit={handleSubmit} noValidate className="form-wrapper">
        <img src={logo} className="img-logo" alt="logo" />
        {errorMessage && (
          <span className="errorMessage">Contraseña incorrecta prueba con LABORATORIA</span>
        )}
        <div className="firstName">
          <input
            className={formErrors.firstName.length > 0 ? "error" : null}
            placeholder="First Name"
            type="name"
            name="firstName"
            noValidate
            onChange={handleChange}
          />
          {formErrors.firstName.length > 0 && (
            <span className="errorMessage">{formErrors.firstName}</span>
          )}
        </div>

        <div className="email">
          <input
            className={formErrors.email.length > 0 ? "error" : null}
            placeholder="Email"
            type="email"
            name="email"
            noValidate
            onChange={handleChange}
          />
          {formErrors.email.length > 0 && (
            <span className="errorMessage">{formErrors.email}</span>
          )}
        </div>
        <div className="password">
          <input
            className={formErrors.password.length > 0 ? "error" : null}
            placeholder="Password"
            type="password"
            name="password"
            noValidate
            onChange={handleChange}
          />

          {formErrors.password.length > 0 && (
            <span className="errorMessage">{formErrors.password}</span>
          )}

        </div>
        <strong className="align-end"> ¿Olvidaste la contraseña?</strong>
        <div className="createAccount">
          <button type="submit">Ingresar</button>
          <p>¿No tienes cuenta? <strong>Registrate</strong></p>
        </div>
      </form>
    </div>

  );

}

export default Login;