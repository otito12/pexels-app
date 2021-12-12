import React from "react";
import { PhotoCard } from "./photoCard";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PhotoGallery = (props) => {
  const { listOfPhotos, ...other } = props;
  return (
    <>
      <Grid
        container
        rowSpacing={5}
        spacing={2}
        columns={12}
        justifyContent="center"
        sx={{
          paddingTop: "2%",
          paddingBottom: "2%",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        {listOfPhotos.map((photo) => (
          <Grid item xs={4}>
            <PhotoCard key={photo.id} image={photo}></PhotoCard>
          </Grid>
        ))}
        {/* Pagination component*/}
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Pagination count={10} color="primary" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
