import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherMain from "./pages/WeatherMain";
import ErrorPage from "./pages/ErrorPage";
import WeeklyForecast from "./pages/WeeklyForecast";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather" element={<WeatherMain />} />
          <Route path="/weather-forecast" element={<WeeklyForecast />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <WeeklyForecast /> */}
      {/* <WeatherMain /> */}
    </div>
  );
}
