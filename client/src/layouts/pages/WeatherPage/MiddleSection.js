import React, { useContext, useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import MainWeatherCard from "../../../components/weatherpage/MainWeatherCard";
import SingleDayWeather from "../../../components/weatherpage/SingleDayWeather";
// import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import { weatherDataWrap } from "../WeatherMain";
import { Link } from "react-router-dom";

export default function MiddleSection() {
  const { weatherData, setWeatherData } = useContext(weatherDataWrap);
  const [imageSrc, setImageSrc] = useState("");

  // Array of random image source links
  const randomImageSrc = [
    "https://cdn.pixabay.com/photo/2016/04/15/10/23/grindelwald-1330662_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/03/29/09/27/clouds-97453_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/07/07/24/clouds-7306684_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/19/23/47/clouds-4215608_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/05/24/09/48/sky-7218043_1280.jpg",
  ];

  useEffect(() => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * randomImageSrc.length);
    // Set the image source using the random index
    setImageSrc(randomImageSrc[randomIndex]);
  }, [weatherData]);

  return (
    <Grid container sx={{}}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img
          src={imageSrc}
          alt=""
          style={{ width: "400px", height: "350px", borderRadius: "10px" }}
        />
      </Grid>
      <Grid item sx={{ ml: { md: "-60px" } }}>
        <MainWeatherCard />

        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Ubuntu",
              fontStyle: "sans-serif",
              fontWeight: "500",
            }}
          >
            Next 3 Days Forecast
          </Typography>
          <Grid item container mt={3} sx={{}}>
            <SingleDayWeather />
            <SingleDayWeather />
            <SingleDayWeather />
          </Grid>
        </Stack>
        <Button variant="contained" size="small" style={{ marginTop: "15px" }}>
          <Link
            to="/weather-forecast"
            style={{ textDecoration: "none", color: "white" }}
          >
            Weekly Forecast
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
