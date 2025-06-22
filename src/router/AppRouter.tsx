import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../Home";
import { AuthRoutes } from "../auth/router/AuthRoutes";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "loading") return <div>Loading...</div>;
  // <CheckingAuth />

  return (
    <div>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<Home />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
};

// <Routes>
//   //Te debe mandar al home
//   <Route index element={<Home />} />
//   //Te debe mandar al login o register según
//   <Route element={<AuthLayout />}>
//     <Route path="login" element={<Login />} />
//     <Route path="register" element={<Register />} />
//   </Route>
// </Routes>
