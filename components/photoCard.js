import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material";

export const PhotoCard = (props) => {
  const { key, image } = props;

  return (
    <>
      <Card sx={{ borderRadius: "40px" }}>
        <CardMedia
          component="img"
          height="300px"
          width="10"
          image={image.src.large2x}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {image.photographer}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
