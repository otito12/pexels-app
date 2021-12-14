import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, IconButton, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Pagination from "@mui/material/Pagination";
import { NameLetter } from "./NameLetter";
import DownloadIcon from "@mui/icons-material/Download";
import { LikeButton } from "./LikeButton";

const style = {
  "& .spanner": { visibility: "hidden" },
  "& .MuiImageListItem-root:hover": {
    cursor: "pointer",
    "& .spanner": {
      visibility: "visible",
    },
  },
  "& .MuiImageListItemBar-title": {
    color: "black",
  },
  "& .PhotographerName:hover": {
    color: "#FF3333",
  },
};

export const PhotoList = (props) => {
  const {
    query,
    listOfPhotos,
    numPhotosPerPage,
    setViewablePhotos,
    getCuratedPhotos,
    ...other
  } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (e, pageNumber) => {
    setCurrentPage(pageNumber);
    getCuratedPhotos(numPhotosPerPage, pageNumber, query, setViewablePhotos);
  };

  return (
    <Box sx={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "90px" }}>
      <ImageList variant="masonry" cols={4} gap={12} sx={style}>
        {listOfPhotos.map((photo) => (
          <ImageListItem key={photo.id}>
            <img
              style={{ borderRadius: "30px" }}
              src={`${photo.src.large2x}?w=500&fit=crop&auto=format`}
              srcSet={`${photo.src.large2x}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.url}
              loading="lazy"
            />
            <span class="spanner">
              <ImageListItemBar
                style={{
                  borderBottomLeftRadius: "29px",
                  borderBottomRightRadius: "29px",
                  boxShadow: "0px 5px 5px 0 rgba(0, 0, 0, 0.2)",
                  padding: "25px 20px 15px 5px",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,0.65) 35%, rgba(255,255,255,0) 100%)",
                }}
                title={
                  <Grid container alignItems="center">
                    <NameLetter
                      name={photo.photographer[0]}
                      color={photo.avg_color}
                    />
                    <a href={photo.photographer_url} class="PhotographerName">
                      {photo.photographer}
                    </a>
                  </Grid>
                }
                actionIcon={
                  <>
                    <LikeButton imageId={photo.id} />
                    {/* <IconButton
                      sx={{ color: "rgba(0, 0, 0, 1)" }}
                      aria-label={`info about ${photo.photographer}`}
                    >
                      <DownloadIcon />
                    </IconButton> */}
                  </>
                }
              />
            </span>
          </ImageListItem>
        ))}
      </ImageList>
      {/* Pagination Component */}

      <Grid container justifyContent="center" sx={{ paddingBottom: "20px" }}>
        <Grid item>
          {/* {currentPage} */}
          <Pagination
            count={10}
            color="secondary"
            onChange={changePage}
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                color: "#FFFFFF ",
                backgroundColor: "#FF3333",
              },
              "& .MuiPaginationItem-root.Mui-selected:hover": {
                color: "#FFFFFF",
                backgroundColor: "#DF2C2C",
              },
            }}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
