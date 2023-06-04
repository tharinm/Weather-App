import React from "react";
import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import SingleDayWeather from "../../components/weatherpage/SingleDayWeather";
import { Link } from "react-router-dom";

export default function WeeklyForecast() {
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
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Ubuntu",
              fontStyle: "sans-serif",
              textAlign:{ md:"center"}
            }}
          >
            Weekly Weather Foreacast
          </Typography>
        </Grid>

        <Grid
          item
          container
          sx={{
            marginTop: { xs: "-80px", md: "-250px" },

            // padding: "10px",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Grid item xs={6} md={2} sx={{}}>
            <SingleDayWeather />
          </Grid>
          <Grid item xs={6} md={2} sx={{}}>
            <SingleDayWeather />
          </Grid>
          <Grid item xs={6} md={2} sx={{}}>
            <SingleDayWeather />
          </Grid>
          <Grid item xs={6} md={2} sx={{}}>
            <SingleDayWeather />
          </Grid>
          <Grid item xs={6} md={2} sx={{}}>
            <SingleDayWeather />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
