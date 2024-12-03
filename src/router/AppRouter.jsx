import React from "react";
import { CreateAcount, DashboardPage, Home, Login } from "../pages";
import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateAcount />} />
        <Route path="login" element={<Login />} />
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
