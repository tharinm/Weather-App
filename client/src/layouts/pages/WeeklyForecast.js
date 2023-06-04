import React, { useContext } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import SingleDayWeather from "../../components/weatherpage/SingleDayWeather";
import { Link } from "react-router-dom";
import { weaklyData } from "../Home";

export default function WeeklyForecast() {
  const { singleWeather } = useContext(weaklyData);

  const arrayOfObjects = singleWeather.map((subarray) => {
    return {
      day: subarray[0],
      temperature: subarray[1],
      condition: subarray[2],
      icon: subarray[3],
    };
  });

  //   console.log(arrayOfObjects);
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
          {arrayOfObjects.map((val, index) => (
            <Grid item xs={6} md={2} sx={{}} key={index}>
              <SingleDayWeather
                day={val.day}
                temperature={val.temperature}
                condition={val.condition}
                imageSrc={val.icon}
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
