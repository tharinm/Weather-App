import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import MainWeatherCard from "../../../components/weatherpage/MainWeatherCard";
import SingleDayWeather from "../../../components/weatherpage/SingleDayWeather";
// import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";

export default function MiddleSection() {
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
          src="https://cdn.pixabay.com/photo/2019/05/19/23/47/clouds-4215608_1280.jpg"
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
            Next 3 Days Forcast
          </Typography>
          <Grid item container mt={3} sx={{}}>
            <SingleDayWeather />
            <SingleDayWeather />
            <SingleDayWeather />
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
