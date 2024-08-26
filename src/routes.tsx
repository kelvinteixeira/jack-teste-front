import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingIn } from "./components/SingIn";
import { SingUp } from "./components/SingUp";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
};
