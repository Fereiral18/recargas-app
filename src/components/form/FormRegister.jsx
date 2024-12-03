import React, { useState } from "react";
import "../form/style.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { FormInputs } from "../../Hooks/FormInputs";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleOnClick = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const { name, email, password, handleOnChange, onResetForm } = FormInputs({
    name: "",
    email: "",
    password: "",
  });
  console.log(showPassword);
  const onLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });
    onResetForm();
  };
  return (
    <>
      <h1 className="title-form">¡Regístrate en segundos!</h1>
      <form className="signup-form">
        <div className="cu-form_row">
          <label htmlFor="" className="form_label">
            Nombre y Apellido
          </label>
          <input
            placeholder="Jhon doe"
            type="text"
            name="name"
            className="cu-form-input"
            value={name}
            onChange={handleOnChange}
            required
          />
          <div className="cu-form-icon">
            <PersonIcon sx={{ width: "20px" }} />
          </div>
        </div>
        <div className="cu-form_row">
          <label htmlFor="" className="form_label">
            correo electronico
          </label>
          <input
            placeholder="jhondoe@gmail.com"
            className="cu-form-input"
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
          <div className="cu-form-icon">
            <EmailIcon sx={{ width: "20px" }} />
          </div>
        </div>
        <div className="cu-form_row">
          <label htmlFor="" className="form_label">
            contraseña
          </label>
          <input
            placeholder="Mínimo 8 caracteres"
            className="cu-form-input"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            required
            onChange={handleOnChange}
          />
          <div className="cu-form-icon">
            <LockIcon sx={{ width: "20px" }} />
          </div>
          <button className="show-pwd" onClick={handleOnClick}>
            Mostrar
          </button>
        </div>
        <div className="separation cu-form_row">
          <div className="line"></div>
          <div className="circle">O</div>
          <div className="line"></div>
        </div>
        <button className="btn-block cu-form_row">
          <span className="btn-text">Empezar a recargar</span>
        </button>
      </form>
    </>
  );
};
