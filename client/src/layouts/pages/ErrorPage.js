import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Error.css";

export default function ErrorPage() {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center" }}
      direction="column"
    >
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg"></div>

                <div className="contant_box_404">
                  <Typography>Please Login ! Unauthorizes Access</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Button variant="contained" size="small">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Login Here
        </Link>
      </Button>
    </Grid>
  );
}
