import "../createAcount/styles.css";
import { Link } from "react-router-dom";
import { FormRegister } from "../../components/form/FormRegister";

export const CreateAcount = () => {
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
              <div className="top-rigth-text">
                ¿Ya estas recargando con nosotros?
              </div>
              <Link to="/login" className="signup-top-rigth">
                Inicia sesion
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
                  <FormRegister />
                  <div className="onBoarding">
                    Si haces click en el boton de arriba, aceptas nuestra{" "}
                    <a href="" className="cu-link">
                      condiciones de servicio
                    </a>{" "}
                    y{" "}
                    <a href="" className="cu-link">
                      politica de privacidad
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bot-logos">
              <div className="main-bot-logos">
                <img
                  className="corporation"
                  src="src\assets\netflix-4.svg"
                  width="60px"
                  alt=""
                />
              </div>
              <div className="main-bot-logos">
                <img src="src\assets\icons8-hbo-96.svg" alt="" />
              </div>
              <div className="main-bot-logos">
                <img src="src\assets\icons8-xbox-game-pass.svg" alt="" />
              </div>
              <div className="main-bot-logos">
                <img
                  src="src\assets\icons8-play-station-100.svg"
                  width="40px"
                  alt=""
                />
              </div>
              <div className="main-bot-logos">
                <img src="src\assets\icons8-tiro-libre.svg" alt="" />
              </div>
            </div>
            <div className="login-page-teams">
              Descubre por que somos la plataforma mas confiable y segura al
              momento de recargar.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
