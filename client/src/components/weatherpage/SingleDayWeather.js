import React from 'react'
import { Box, Stack, Typography } from "@mui/material";

export default function SingleDayWeather() {
  return (
    <Box
      style={{
        width: "150px",
        height: "140px",
        // backgroundColor: "#98eecc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border:'2px solid gray'
      }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-256.png"
          alt=""
          style={{ width: "80px", height: "80px" }}
        />
        <Typography>34 Clouds</Typography>
      </Stack>
      <Typography>Wednesday</Typography>
    </Box>
  );
}
