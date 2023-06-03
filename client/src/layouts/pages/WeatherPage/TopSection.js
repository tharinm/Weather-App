import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

export default function TopSection() {
  return (
    <Grid
      container
      sx={{
        // backgroundColor: "yellow",
        // justifyContent: "space-between",
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
            // color: "lightblue",
            mb: { xs: "5px" },
          }}
        >
          Good Morning ! Tharindu
        </Typography>
      </Grid>

      <Grid item xs={12} md={7}>
        <Stack gap="15px" direction={{ xs: "column", sm: "row", md: "row" }}>
          <TextField
            label=" Latitude"
            id="outlined-size-small"
            size="small"
            sx={{ width: { xs: "70%" } }}
          />

          <TextField
            label="Longitude"
            id="outlined-size-small"
            size="small"
            sx={{ width: { xs: "70%" } }}
          />

          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "uppercase",
              width: { xs: "100px", md: "150px" },
            }}
          >
            Search
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
