import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import "../form/style.css";
import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../../Hooks/FormInputs";

export const Form = () => {
  const navigate = useNavigate();
  const { name, email, password, handleOnChange, onResetForm } = FormInputs({
    name: "",
    email: "",
    password: "",
  });
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
      <h1 className="title-form">¡Te damos la bienvenida de nuevo!</h1>
      <form onSubmit={onLogin} className="signup-form">
        <div className="cu-form_row">
          <label htmlFor="" className="form_label">
            correo electronico
          </label>
          <input
            className="cu-form-input"
            required
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
            className="cu-form-input"
            required
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
          <div className="cu-form-icon">
            <LockIcon sx={{ width: "20px" }} />
          </div>
          <div>
            <Link>¿Olvidaste la contraseña?</Link>
          </div>
        </div>
        <div className="separation cu-form_row">
          <div className="line"></div>
          <div className="circle">O</div>
          <div className="line"></div>
        </div>
        <button className="btn-block cu-form_row">
          <span className="btn-text"> Iniciar sesion</span>
        </button>
      </form>
    </>
  );
};
