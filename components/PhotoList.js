import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, IconButton, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Pagination from "@mui/material/Pagination";

const style = {
  "&:hover": {
    "& .MuiImageListItemBar-root": {
      display: "flex",
      background: "rgba(255, 255, 0, 0.54)",
    },
    cursor: "pointer",
  },
};

export const PhotoList = (props) => {
  const { listOfPhotos, ...other } = props;
  return (
    <Box sx={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "90px" }}>
      <ImageList variant="masonry" cols={4} gap={12}>
        {listOfPhotos.map((photo) => (
          <ImageListItem key={photo.id} sx={style}>
            <img
              style={{ borderRadius: "30px" }}
              src={`${photo.src.large2x}?w=500&fit=crop&auto=format`}
              srcSet={`${photo.src.large2x}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.url}
              loading="lazy"
            />
            <ImageListItemBar
              style={{
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                padding: "10px",
              }}
              title={photo.photographer}
              subtitle={photo.photographer_url}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${photo.photographer}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid container justifyContent="center" sx={{ paddingBottom: "20px" }}>
        <Grid item>
          <Pagination
            count={10}
            sx={{
              "& .Mui-selected": { color: "white", backgroundColor: "#FF3333" },
            }}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    author: "@rollelflex_graphy726",
  },
];
