import * as React from "react";

import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpIcon from "@mui/icons-material/Help";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import "../Dashboard/style.css";
import { NavBarDashboard } from "../../components/navBar/NavBarDashboard";
import { useState } from "react";
import { Plataform } from "../../components/plataform/Plataform";
import { Games } from "../../components/games/Games";
import { ChampionShip } from "../../components/championship/ChampionShip";


export const DashboardPage = () => {
const [serviceOrChampionship, setserviceOrChampionship] = useState('servicios')
  const [gamesOrPlataform, setGamesOrPlataform] = useState('plataforma')
  const handleOnClickGamesOrPlataform = (e) => {
    setGamesOrPlataform(e.target.name)
  }
  const handleOnClickServicesOrChampionship = (e) => {
    setserviceOrChampionship(e.target.name)
    
  }
console.log(gamesOrPlataform)
  return(
    <>
      <div className="dashboard-container">
        <div className="nav">
   
          <NavBarDashboard />
        </div>
        <main>
          <div className="dashboard-body">
            <div className="barr-option">
              <div className="barr-option-name">
                <div className="bar_workspace">
                  <button className="btn-bar-users">Jhon Doe</button>
                </div>
              </div>
              <div className="bar-body">
                <div className="item-container">
                  <HomeIcon />
                  <Link to="/">inicio</Link>
                </div>
                <div className="item-container">
                  <HelpIcon />
                  <button name="servicios" onClick={handleOnClickServicesOrChampionship}>
                  Servicios
                  </button>
                </div>
                <div className="item-container">
                  <EmojiEventsIcon />
                  <button name="torneos" onClick={handleOnClickServicesOrChampionship}>

                  torneos
                  </button>
                </div>
                <div className="item-container">
                  <HelpIcon />
                  <Link to="/suport">soporte </Link>
                </div>
              </div>
              <div className="footer-invitation">
                <div className="add-users-invitation">
                  <PersonAddAltIcon /> invitar
                </div>
              </div>
            </div>
            <div className="container-apps_services">
              <div className="enunciados">
                <div className="btn-bar-users">Bienvenido "nombre del usuario" recarguemos...</div>
              </div>
                    
                     {
                      serviceOrChampionship == 'servicios' ?
                      <>
                      <div className="categories">
                      <div className="btn-categories">
                        <button name="plataforma" onClick={handleOnClickGamesOrPlataform}>Plataformas</button>
                      </div>
                      <div className="separation"></div>
                      <div className="btn-categories">
                        <button name="juegos" onClick={handleOnClickGamesOrPlataform}>Juegos</button>
                      </div>
                    </div>
                    <div className="apps-container-dashboard">
                      {
                        gamesOrPlataform == 'plataforma' ?
                        <Plataform/>
                        :  <Games/> }
                    </div> 
                        </>
                    : <ChampionShip/>
                     }
                    
             
                      
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
