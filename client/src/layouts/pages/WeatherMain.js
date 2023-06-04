import React, { createContext, useState } from "react";
import { Box, Grid } from "@mui/material";
import TopSection from "./WeatherPage/TopSection";

import MiddleSection from "./WeatherPage/MiddleSection";

export const weatherDataWrap = createContext({});

export default function WeatherMain() {
  const [weatherData, setWeatherData] = useState({});
  const [err, setErr] = useState("");

  const [lat, setLat] = useState("6.9271");
  const [long, setLong] = useState("79.8612");
  //   console.log(currentUser.username);

  // console.log(weatherData.weather)
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: { xs: "white", sm: "skyblue", md: "skyblue" },
        display: "flex",

        alignItems: { md: "center" },
        justifyContent: { md: "center" },
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "white",
          height: "600px",
          width: "1100px",
          padding: "30px",
          justifyContent: "center",
          //   alignItems:'center'
        }}
      >
        <weatherDataWrap.Provider
          value={{
            weatherData,
            setWeatherData,
            err,
            setErr,
            lat,
            setLat,
            long,
            setLong,
          }}
        >
          <Grid item xs={12} sx={{}}>
            <TopSection />
          </Grid>
          <Grid item xs={12} sx={{ mt: { md: "-35px", xs: "30px" } }}>
            <MiddleSection />
          </Grid>
        </weatherDataWrap.Provider>
      </Grid>
    </Box>
  );
}
