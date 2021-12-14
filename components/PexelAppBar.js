import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid, InputBase } from "@mui/material";
import Link from "next/link";
import { viewablePhotosContext } from "../contexts/viewablePhotos";
import curatedImages from "../services/curated_images";

export const PexelAppBar = (props) => {
  const { setViewablePhotos, pageNumber, setPageNumber, setSearchQuery } =
    useContext(viewablePhotosContext);

  const handleSearch = (e) => {
    if (e.keyCode == 13) {
      console.log(`Run Search on ${e.target.value}`);
      curatedImages.getSearch(10, 1, e.target.value, setViewablePhotos);
      setSearchQuery(e.target.value);
      setPageNumber(1);
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
