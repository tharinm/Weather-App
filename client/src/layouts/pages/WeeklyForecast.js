import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import SingleDayWeather from "../../components/weatherpage/SingleDayWeather";

import { useLocation, Link } from "react-router-dom";

export default function WeeklyForecast() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const singleTemp = query.get("singleTemp");
  const daysArray = query.get("daysArray");
  const weatherConditions = query.get("weatherConditions");

  // Convert the string representation of the arrays to actual arrays
  const singleTempArray = JSON.parse(singleTemp);
  const daysArrays = JSON.parse(daysArray);
  const weatherConditionsArray = JSON.parse(weatherConditions);

  //   console.log(weatherConditionsArray);

  const convertArrayToObject = (array) => {
    return array.map(([weather, icon]) => ({ weather, icon }));
  };

  const convertedArray = convertArrayToObject(weatherConditionsArray);

  //   console.log(convertedArray);

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
              textAlign: { md: "center" },
            }}
          >
            Weekly Weather Foreacast
          </Typography>
        </Grid>

        <Grid
          item
          container
          sx={{
            marginTop: { xs: "20px", mt: "" },

            // padding: "10px",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {singleTempArray.map((temperature, index) => (
            <Grid item xs={6} md={2} sx={{}} key={index}>
              <SingleDayWeather
                key={index}
                temperature={temperature}
                day={daysArrays[index]}
                condition={convertedArray[index].weather}
                imageSrc={convertedArray[index].icon}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            width: { xs: "150px" },
            marginRight: { xs: "60%", md: "0%" },
          }}
        >
          <Link
            to="/weather"
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </Link>
        </Button>
      </Grid>
    </Box>
  );
}
