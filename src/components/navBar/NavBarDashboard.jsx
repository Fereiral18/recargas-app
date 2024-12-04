import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../navBar/style.css";
import { Link, useLocation } from "react-router-dom";

export const NavBarDashboard = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <div className="dashboard-container">
        <nav className="navigation-2">
          <div className="">
            <Link to="/">
              <picture>logo </picture>
            </Link>
          </div>

          <>
            {state?.logged ? (
              <div className="">
                <span className="">
                  <div>{state?.name}</div>
                  <div className="">
                    <button className="">
                      <Link to="/" className="">
                        Cerrar sesion
                      </Link>
                    </button>
                  </div>
                </span>
              </div>
            ) : (
              ""
            )}
          </>
        </nav>
        <div className="dashboard-body">
          <div className="barr-option">
            <div className="barr-option-name">
              <div className="bar_workspace">
                <button className="btn-bar-users">nombre del usuario</button>
              </div>
            </div>
            <div className="bar-body">
              <div className="item-container">
                <Link to="/">inicio</Link>
              </div>
              <div className="item-container">cronograma de torneos</div>
              <div className="item-container">soporte</div>
            </div>
          </div>
          <div className="container-apps_services"></div>
        </div>
      </div>
    </>
  );
};
