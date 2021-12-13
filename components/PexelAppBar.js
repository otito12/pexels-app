import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid, InputBase } from "@mui/material";

export const PexelAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: "90px",
          justifyContent: "center",
          background: "white",
          boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid
          container
          sx={{
            position: "fixed",
            justifyContent: "center",
            zIndex: "100",
          }}
        >
          <Grid item xs={5}>
            <InputBase
              startAdornment={<SearchIcon />}
              endAdornment={<SettingsIcon />}
              placeholder="Search..."
              sx={{
                background: "white",
                width: "100%",
                boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                padding: "10px",
                "& .MuiSvgIcon-root": {
                  margin: "0px 10px 0px 10px",
                  color: "rgba(0, 0, 0, 0.4)",
                },
              }}
            />
          </Grid>
        </Grid>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              background: "#FF3333",
              padding: "10px 40px 10px 40px",
              borderRadius: "5px",
              marginLeft: "5%",
              fontSize: "25px",
            }}
          >
            <strong>ROKT - PEXEL</strong>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
