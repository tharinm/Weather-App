import React from "react";
import { Box, Grid } from "@mui/material";
import RegisterForm from "../../components/Register/RegisterForm";

export default function Register() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: { xs: "white", sm: "skyblue", md: "skyblue" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "15px",
          //   border: "3px solid black",
          height: "600px",
          justifyContent: "center",
          alignItems: "center",
          width: "1100px",
          padding: "30px",
        }}
      >
        <Grid
          item
          sx={{
            margin: "",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <div sx={{ padding: "" }}>
            <img
              src="https://cdn.pixabay.com/photo/2022/06/15/18/29/landscape-7264427_1280.png"
              alt=""
              style={{
                height: "500px",
                width: "400px",
                borderRadius: "15px",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={7} sx={{}}>
          <RegisterForm />
        </Grid>
      </Grid>
    </Box>
  );
}
