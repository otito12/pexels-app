import { Grid, Typography } from "@mui/material";
import React from "react";

export const NameLetter = (props) => {
  const { name, color } = props;
  return (
    <Grid
      container
      style={{
        height: "35px",
        width: "35px",
        backgroundColor: color,
        // border: "solid black",
        borderRadius: "50%",
        marginRight: "10px",
        justifyContent: "center",
        alignContent: "center",
        paddingBottom: "3px",
      }}
    >
      <Typography sx={{ fontSize: "20px" }}>
        <strong>{name.toUpperCase()}</strong>
      </Typography>
    </Grid>
  );
};
