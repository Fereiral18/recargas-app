import React from "react";
import "../Dashboard/style.css";
import { Navbar } from "../../components/navBar/Navbar";

export const DashboardPage = () => {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <main></main>
    </>
  );
};
