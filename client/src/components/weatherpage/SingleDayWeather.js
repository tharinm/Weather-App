import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function SingleDayWeather({ temperature, day, condition, imageSrc }) {
  // console.log(temperature);
  return (
    <Box
      style={{
        width: "150px",
        height: "140px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <img src={imageSrc} alt="" style={{ width: "80px", height: "80px" }} />
        <Typography>
          {temperature} °C
          <br></br> {condition}
        </Typography>
      </Stack>
      <Typography>{day}</Typography>
    </Box>
  );
}
