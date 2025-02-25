import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainDashboard from "./Pages/MainDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  return (
    <>
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin-dashboard/*" element={<MainDashboard/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
