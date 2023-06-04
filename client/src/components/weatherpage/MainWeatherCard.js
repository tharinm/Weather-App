import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { weatherDataWrap } from "../../layouts/pages/WeatherMain";
import moment from "moment";
import {} from "react-router-dom";
import { weaklyData } from "../../layouts/Home";

export default function MainWeatherCard() {
  const { weatherData, setWeatherData } = useContext(weatherDataWrap);

  if (
    !weatherData ||
    !weatherData.city ||
    !weatherData.list[0].main.temp ||
    !weatherData.list[0].weather[0].main ||
    !weatherData.list[0].weather[0].icon
  ) {
    return (
      <Typography>Loading...</Typography>
      // or render a loading state component
    );
  }

  const currentDay = moment().format("Do");
  const currentMonth = moment().format("MMMM");

  const temperatureInCelsius = Math.round(
    weatherData.list[0].main.temp - 273.15
  );

  // console.log(weatherData.list[0].main.temp);
  //   console.log(weatherData.list[0].weather[0].icon);

  return (
    <Stack sx={{ alignItems: "left", gap: "20px" }} direction="row">
      <Box>
        <Typography
          sx={{
            fontSize: "50px",
            fontFamily: "Ubuntu",
            fontStyle: "sans-serif",
          }}
        >
          {temperatureInCelsius}°C
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_location_on_48px-256.png"
            alt=""
            style={{ width: "25px", height: "25px" }}
          />

          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Ubuntu",
              fontStyle: "sans-serif",
              fontWeight: "400",
            }}
          >
            {weatherData.city.name}
            <span
              style={{
                marginLeft: "10px",
                color: "skyblue",
              }}
            >
              {weatherData.list[0].weather[0].main}
            </span>
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Ubuntu",
            fontStyle: "sans-serif",
            ml: "8px",
          }}
        >
          {currentDay} {currentMonth}
        </Typography>
      </Box>
      <Box>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
          alt=""
          style={{ width: "80px", height: "80px" }}
        />
      </Box>
    </Stack>
  );
}
