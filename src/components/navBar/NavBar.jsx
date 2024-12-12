import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../navBar/style.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-init-home"
              src="src\assets\WhatsApp Image 2024-12-12 at 1.29.27 AM.jpeg"
            />
            <span className="logo-info">la mejor APP para recargas</span>
          </Link>
        </div>
        <div className="helpers">
          <div className="helpers-boxes">
            <div className="boxes-123">
              <button>
                <span className="letter-help">
                  <span>Productos</span>
                  <KeyboardArrowDownIcon sx={{}} />
                </span>
              </button>
            </div>
            <div className="boxes-123">
              <button>
                <span className="letter-help">
                  <span>Soluciones</span>
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
            <div className="boxes-123">
              <button>
                <span className="letter-help">
                  <span>Noticias</span>
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
            <div className="boxes-123">
              <button>
                <span className="letter-help">
                  <span>Torneos</span>
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
            <div className="boxes-123">
              <button>
                <span className="letter-help">
                  <span>Soporte</span>
                  <KeyboardArrowDownIcon />
                </span>
              </button>
            </div>
          </div>
        </div>

        {state?.logged ? (
          <>
            <div className="login-register">
              <span className="box-login">
                <div>{state?.name}</div>
                <div className="register-button">
                  <button className="btn-register">
                    <Link to="/" className="btn">
                      Cerrar sesion
                    </Link>
                  </button>
                </div>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="login-register">
              <span className="box-login">
                <Link to="/login" className="btn-login">
                  Iniciar sesión
                </Link>
              </span>

              <div className="register-button">
                <button className="btn-register">
                  <Link to="create" className="btn">
                    Crear cuenta
                  </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};
