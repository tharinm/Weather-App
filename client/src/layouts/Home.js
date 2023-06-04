import React, { createContext, useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherMain from "./pages/WeatherMain";
import ErrorPage from "./pages/ErrorPage";
import WeeklyForecast from "./pages/WeeklyForecast";

export const weaklyData = createContext([]);

export default function Home() {
  const [singleWeather, setSingleWeather] = useState([]);

  return (
    <div>
      <weaklyData.Provider value={{ singleWeather, setSingleWeather }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/weather" element={<WeatherMain />} />
            <Route path="/weather-forecast" element={<WeeklyForecast />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </weaklyData.Provider>
    </div>
  );
}
