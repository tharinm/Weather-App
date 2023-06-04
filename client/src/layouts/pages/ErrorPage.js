import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center" }}
      direction="column"
    >
      <Grid
        item
        sx={{ mt: "50px", justifyContent: "center", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "20px" }}>
          You Are Not Registered
        </Typography>

        <Button variant="contained" size="small">
          <Link to="/" sx={{ textDecoration: "none" }}>
            Login
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
