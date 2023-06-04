import React, { useState } from "react";
import { Grid, Typography, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../Register/RegisterForm.css";
import logo from "../../assets/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.username || !details.password) {
      setError("Please fill in all the fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        details,
        { withCredentials: true }
      );

      //save in local storage
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/weather");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Grid
      container
      sx={{
        textAlign: "center",
      }}
    >
      <Grid item xs={12}>
        <img src={logo} alt="" style={{ width: "150px", height: "150px" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{
            mb: "15px",
            fontFamily: "Noto Sans",
            fontWeight: "500",
            mt: "-25px",
          }}
        >
          Sing In
        </Typography>{" "}
        {error && <p style={{ color: "red", fontSize: "15px" }}>{error}</p>}
        <Stack
          gap="20px"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            name="username"
            defaultValue="Username"
            sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}
            onChange={handleInputChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            name="password"
            defaultValue="Password"
            sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}
            onChange={handleInputChange}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{ mt: "25px", mb: "15px" }}
          className="btn"
          onClick={handleSubmit}
        >
          <span className="btn-text-one">Login</span>
          <span className="btn-text-two">Submit</span>
        </Button>
        <Typography sx={{ fontSize: "13px", fontFamily: "Noto Sans" }}>
          Dont have an account ?
          <Link
            to="/register"
            style={{ textDecoration: "none", marginLeft: "8px" }}
          >
            Sign up
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
