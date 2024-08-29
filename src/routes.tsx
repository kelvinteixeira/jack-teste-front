import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingIn } from "./components/SingIn";
import { SingUp } from "./components/SingUp";
import { Home } from "./screens/Home";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/material";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
