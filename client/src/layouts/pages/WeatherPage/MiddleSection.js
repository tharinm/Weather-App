import React, { useContext, useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import MainWeatherCard from "../../../components/weatherpage/MainWeatherCard";
import SingleDayWeather from "../../../components/weatherpage/SingleDayWeather";
// import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import { weatherDataWrap } from "../WeatherMain";
import axios from "axios";
import moment from "moment";
import { weaklyData } from "../../Home";
import { Link } from "react-router-dom";

export default function MiddleSection() {
  const { singleWeather, setSingleWeather } = useContext(weaklyData);
  const { weatherData, lat, long } = useContext(weatherDataWrap);
  const [imageSrc, setImageSrc] = useState("");
  const [dayWeather, setDayWeather] = useState({});

  // Array of random image source links
  const randomImageSrc = [
    "https://cdn.pixabay.com/photo/2016/04/15/10/23/grindelwald-1330662_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/03/29/09/27/clouds-97453_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/07/07/24/clouds-7306684_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/19/23/47/clouds-4215608_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/05/24/09/48/sky-7218043_1280.jpg",
  ];

  const fetchWeatherData = (lat, long) => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&current_weather=true&timezone=Asia/Colombo`
      )
      .then((response) => {
        setDayWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchWeatherData(lat, long);
  }, [weatherData]);

  //  console.log(dayWeather);

  useEffect(() => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * randomImageSrc.length);
    // Set the image source using the random index
    setImageSrc(randomImageSrc[randomIndex]);
  }, [weatherData]);

  if (!dayWeather.daily || !dayWeather.daily.temperature_2m_max) {
    return <div>Loading....</div>;

    // const day = dayWeather.daily.time;

    // console.log(day);

    // console.log(singleTemp);
  }

  // console.log(dayWeather.daily.temperature_2m_max);
  const singleTemp = dayWeather.daily.temperature_2m_max;

  const weatherConditions = singleTemp.map((temp) => {
    let condition = "";
    let imageSrc = "";

    if (temp < 0) {
      condition = "Freezing";
      imageSrc =
        "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/snow-512.png";
    } else if (temp >= 0 && temp <= 10) {
      condition = "Cold";
      imageSrc =
        "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/snow-cloud-256.png";
    } else if (temp > 10 && temp <= 20) {
      condition = "Cool";
      imageSrc =
        "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rain-256.png";
    } else if (temp > 20 && temp <= 25) {
      condition = "Mild";
      imageSrc =
        "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/cloud-512.png";
    } else if (temp > 25 && temp <= 30) {
      condition = "Warm";
      imageSrc =
        "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/cloudy-512.png";
    } else {
      condition = "Hot";
      imageSrc =
        "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/sun-256.png";
    }

    return [condition, imageSrc];
  });

  //getDays
  const getDaysArray = () => {
    const daysArray = [];
    const today = moment(); // Get the current date

    for (let i = 0; i < 6; i++) {
      const futureDay = today.clone().add(i, "days");
      const dayName = futureDay.format("dddd");
      daysArray.push(dayName);
    }

    return daysArray;
  };

  // console.log(getDaysArray());

  const handleWeeklyForecastClick = () => {
    setSingleWeather(weatherDataArray);
  };

  const weatherDataArray = getDaysArray().map((day, index) => {
    const temp = singleTemp[index];
    const condition = weatherConditions[index][0];
    const imageSrc = weatherConditions[index][1];
    return [day, temp, condition, imageSrc];
  });

  // console.log(weatherConditions);

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
          {dayWeather && (
            <Grid item container mt={3} sx={{}}>
              {singleTemp.slice(1, 4).map((temperature, index) => (
                <SingleDayWeather
                  key={index}
                  temperature={temperature}
                  day={getDaysArray()[index + 1]}
                  condition={weatherConditions[index + 1][0]}
                  imageSrc={weatherConditions[index + 1][1]}
                />
              ))}
            </Grid>
          )}
        </Stack>
        <Button
          variant="contained"
          size="small"
          style={{ marginTop: "15px" }}
          onClick={handleWeeklyForecastClick}
        >
          <Link
            to="/weather-forecast"
            style={{ textDecoration: "none", color: "white" }}
          >
            View More
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
