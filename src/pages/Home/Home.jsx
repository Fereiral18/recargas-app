import React from "react";
import "../Home/style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Navbar } from "../../components/navBar/Navbar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <div className="container-general">
            <div>
              <div>
                <article>
                  <div>
                    <div>
                      <div>
                        <div className="container-title">
                          <h1 className="principal-title">
                            La mejor App, para tus recargas <br />
                            juegos y plataformas.
                          </h1>
                        </div>
                        <div>
                          <p className="sub-title">
                            <strong>
                              Somos lo mas confiable y rapido en el mercado
                            </strong>{" "}
                            al momento de recargar.
                          </p>
                        </div>
                      </div>
                      <div className="btn-info">
                        <div className="button-login">
                          <Link to="/dashboard">
                            <span className="btn-go">
                              Recargar. EMPEZEMOS{" "}
                              <ArrowForwardIcon
                                sx={{
                                  fontSize: "22px",
                                  marginInlineStart: "8px",
                                  marginBlock: "-3px",
                                }}
                              />{" "}
                            </span>
                          </Link>
                        </div>
                        <div className="subtitle">
                          <p>Seguro y Rapido.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      --aqui ira una foto de la app interna al logearse--
                    </div>
                    <div>
                      <div className="aditional-info">
                        <div className="color-background"></div>
                        <p>Confiado por miles de personas a nivel nacional.</p>
                      </div>
                      <div className="products">
                        <div className="free-fire">
                          <img
                            className="icon-home"
                            width={90}
                            src="src\assets\freefire-1.svg"
                            alt=""
                          />
                        </div>
                        <div className="netflix">
                          <img
                            className="icon-home"
                            src="src\assets\icons8-netflix.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="icon-home"
                            width={80}
                            src="src\assets\icons8-hbo-96.svg"
                            alt="HBO"
                          />
                        </div>
                        <div>
                          <img
                            className="icon-home"
                            width={80}
                            src="src\assets\icons8-xbox-game-pass.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="icon-home"
                            src="src\assets\icons8-play-station-100.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="icon-home"
                            width={80}
                            src="src\assets\MagicTV_logo.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <div className="information-images">
          <div className="info-1">
            <div>
              <h3 className="garantice">
                (nombre de la app) Los reemplaza por completo
              </h3>
              <p className="garantice">
                Elimine la expansión de aplicaciones, evite estafas y perdida de
                tiempo.
              </p>
            </div>
            <div>picture</div>
          </div>
          <div className="info-2">
            <div>
              <h3 className="garantice">Garantizamos seguridad</h3>
              <p className="garantice">
                {" "}
                Facil y sencillo, sigue mejorando en tu juego, y recarga con
                nosotros.
              </p>
            </div>
            <div>picture</div>
          </div>
        </div>
        <footer>
          <div>
            <div>
              <div className="contacts">
                <p>Contactar</p>
              </div>
              <div className="contacts-icon">
                <div>
                  <img
                    className="x"
                    src="src\assets\gorjeo.png"
                    alt="Facebook"
                  />
                </div>
                <div>
                  <InstagramIcon />
                </div>
                <div>
                  <FacebookIcon />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span>2024 recargas</span>
          </div>
        </footer>
      </div>
    </>
  );
};
