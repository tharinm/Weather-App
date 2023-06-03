import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function MainWeatherCard() {
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
          24 Clouds
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
            Colombo, Sri Lanka
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
          21 st Octomber
        </Typography>
      </Box>
      <Box>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-256.png"
          alt=""
          style={{ width: "80px", height: "80px" }}
        />
      </Box>
    </Stack>
  );
}
