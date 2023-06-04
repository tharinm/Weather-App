import React, { useState } from "react";
import { Grid, Typography, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./RegisterForm.css";
import logo from "../../assets/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [error, seterror] = useState("");

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.username || !details.password) {
      seterror("Please fill in all the fields");
      return;
    }
    // console.log(details);
    try {
      await axios.post("http://localhost:8000/api/auth/register", details);
      navigate("/");
    } catch (err) {
      console.log(err);
      // console.log(err.response.data);
      seterror(err.response.data);
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
          Sign Up
        </Typography>
        {error && <p style={{ color: "red", fontSize: "15px" }}>{error}</p>}
        <Stack
          gap="20px"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            required
            id="outlined-required"
            label="Username"
            // defaultValue="Username"
            name="username"
            sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}
            onChange={handleInputChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            // defaultValue="Password"
            name="password"
            type="password"
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
          <span className="btn-text-one">Register</span>
          <span className="btn-text-two">Submit</span>
        </Button>

        <Typography sx={{ fontSize: "13px", fontFamily: "Noto Sans" }}>
          Already have an account?
          <Link to="/" style={{ textDecoration: "none", marginLeft: "8px" }}>
            Sign Up
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
