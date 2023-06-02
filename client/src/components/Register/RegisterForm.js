import React from "react";
import { Grid, Typography, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./RegisterForm.css";
import logo from "../../assets/logos.svg";

export default function RegisterForm() {
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
          sx={{ mb: "15px", fontFamily: "Noto Sans", fontWeight: "500",mt:'-25px' }}
        >
          Sign Up
        </Typography>
        <Stack
          gap="20px"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Username"
            sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Password"
            sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}
          />
        </Stack>

        <Button
          variant="contained"
          sx={{ mt: "25px", mb: "15px" }}
          className="btn"
        >
          <span class="btn-text-one">Register</span>
          <span class="btn-text-two">Submit</span>
        </Button>
        <Typography sx={{ fontSize: "13px", fontFamily: "Noto Sans" }}>
          Already have an account ? Sign In
        </Typography>
      </Grid>
    </Grid>
  );
}
