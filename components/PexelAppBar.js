import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid, InputBase } from "@mui/material";
import Link from "next/link";
import CollectionsService from "../services/collections";

export const PexelAppBar = () => {
  const handleSearch = (e) => {
    if (e.keyCode == 13) {
      alert(`Run Search on ${e.target.value}`);
    }
  };
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
          direction="row"
          justifyContent="space-between"
          sx={{
            position: "fixed",
            zIndex: "1",
          }}
        >
          <Grid item xs={1.6}>
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{
                  background: "#FF3333",
                  padding: "10px 40px 10px 40px",
                  borderRadius: "5px",
                  marginLeft: "10%",
                  fontSize: "1vw",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <strong>ROKT - PEXEL</strong>
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <InputBase
              startAdornment={<SearchIcon />}
              endAdornment={<SettingsIcon />}
              placeholder="Search..."
              onKeyDown={handleSearch}
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
          <Grid item xs={1.6}></Grid>
        </Grid>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
};
