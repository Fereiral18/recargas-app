import React from "react";
import "../src/styles.css";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <div className="general-container">
        <div className="container-info">
          <AppRouter />
        </div>
      </div>
    </>
  );
};
