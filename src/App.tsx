import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import TerminosCondiciones from "./pages/terminosCondiciones";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/registerpage" element={<RegisterPage />} />
      <Route path="/terminosCondiciones" element={<TerminosCondiciones />} />
    </Routes>
  );
};
