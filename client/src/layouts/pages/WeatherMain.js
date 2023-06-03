import React from "react";
import { Box, Grid } from "@mui/material";
import TopSection from "./WeatherPage/TopSection";

import MiddleSection from "./WeatherPage/MiddleSection";

export default function WeatherMain() {
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
        <Grid item xs={12} sx={{}}>
          <TopSection />
        </Grid>
        <Grid item xs={12} sx={{ mt: { md: "-35px", xs: "30px" } }}>
          <MiddleSection />
        </Grid>
      </Grid>
    </Box>
  );
}
