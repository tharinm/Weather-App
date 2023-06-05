import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { weatherDataWrap } from "../WeatherMain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TopSection() {
  const {
    setWeatherData,

    setErr,
    lat,
    setLat,
    long,
    setLong,
  } = useContext(weatherDataWrap);

  const [currentUser, setCurrentUser] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    fetchWeatherData(lat, long);
  };

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };

  const handleLongChange = (e) => {
    setLong(e.target.value);
  };

  const fetchWeatherData = (latitude, longitude) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=924c7e6c0f3ebd4974af86a9305376ba`
      )
      .then((response) => {
        setWeatherData(response.data);
        setErr(null);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setErr("Error fetching weather data");
      });
  };

  useEffect(() => {
    fetchWeatherData(lat, long);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  //logout
  const handleLogout = async () => {
    try {
      await axios.post("https://weather-b.onrender.com/api/auth/logout");
      localStorage.setItem("currentUser", "");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //Block unauthorized users
  if (!currentUser) {
    navigate("/error");
  }

  // console.log(data);

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={5}>
        <Typography
          sx={{
            fontFamily: "Ubuntu",
            fontStyle: "sans-serif",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "36px",
            mb: { xs: "5px" },
          }}
        >
          Hello ! {currentUser.username}
        </Typography>
      </Grid>

      <Grid item xs={12} md={7}>
        <Stack gap="15px" direction={{ xs: "column", sm: "row", md: "row" }}>
          <TextField
            label="Latitude"
            id="outlined-size-small"
            size="small"
            sx={{ width: { xs: "70%" } }}
            name="lat"
            // value={lat}
            onChange={handleLatChange}
          />

          <TextField
            label="Longitude"
            id="outlined-size-small"
            size="small"
            sx={{ width: { xs: "70%" } }}
            name="long"
            // value={long}
            onChange={handleLongChange}
          />

          <Button
            variant="contained"
            size="small"
            onClick={handleSubmit}
            sx={{ width: { xs: "150px" } }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={handleLogout}
            sx={{ width: { xs: "150px" } }}
          >
            Logout
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
