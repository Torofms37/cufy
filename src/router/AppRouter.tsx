import React from "react";

export const AppRouter = () => {
  return (
        <div>
      <Routes>
        {
          (status === 'authenticated')
          ? <Route path="/*" element={<CambiarRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
        }
        <Route path="/*" element={<Navigate to='/auth/login' />} />
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