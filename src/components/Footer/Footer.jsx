import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "20px",
          backgroundColor: "#1976d2",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          position: "fixed",
          bottom: 0,
          boxShadow: 3
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#ffff" variant="h7" fontFamily={'roboto'} >
              NSBM IEEE-HACKOTHON {`${new Date().getFullYear()} `}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
