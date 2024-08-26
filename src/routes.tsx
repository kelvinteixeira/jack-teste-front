import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingIn } from "./components/SingIn";
import { SingUp } from "./components/SingUp";
import { Home } from "./screens/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
};
