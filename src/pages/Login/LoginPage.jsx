import "../createAcount/styles.css";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/FormLogin";

export const Login = () => {
  return (
    <>
      <div className="login-page-new">
        <div className="top-divider">
          <nav>
            <Link className="login-page-logo" to="/">
              logos
              <div className="logo-text">
                La aplicacion que abarca todo lo referente a las recargas
              </div>
            </Link>
            <div className="new-top-rigth">
              <div className="top-rigth-text">¿No tienes aun cuenta?</div>
              <Link to="/create" className="signup-top-rigth">
                Registrate
              </Link>
            </div>
          </nav>
        </div>
        <div className="login-page-new_main">
          <div>imagen de fondo</div>
          <div>
            <div className="signup_main">
              <div>
                <div className="signup-page-new">
                  <Form />
                </div>
              </div>
            </div>
            <div>
              <div className="bot-logos">
                ¿No tienes cuenta?<Link to="/create">Registrate</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="login-page-teams">
          Este sitio esta protegido por reCAPTCHA, y se aplican{" "}
          <a href="https://policies.google.com/privacy">
            la politica de privacidad
          </a>{" "}
          y las{" "}
          <a href="https://policies.google.com/terms">
            condiciones de servicio
          </a>{" "}
          de Google.
        </div>
      </div>
    </>
  );
};
