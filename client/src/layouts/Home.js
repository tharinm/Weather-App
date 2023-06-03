import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherMain from "./pages/WeatherMain";

export default function Home() {
  return (
    <div>
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        {/* </Routes> */}
      {/* // </BrowserRouter> */}
      <WeatherMain />
    </div>
  );
}
