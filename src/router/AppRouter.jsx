import React from "react";
import { CreateAcount, DashboardPage, Home, Login } from "../pages";
import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { SupportPage } from "../pages/Support/SupportPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateAcount />} />
        <Route path="login" element={<Login />} />
        <Route path="suport" element={<SupportPage />} />
        <Route
          path="dashboard"
          element={
            <PrivateRouter>
              <DashboardPage />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
