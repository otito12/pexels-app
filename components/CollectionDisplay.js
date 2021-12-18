import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LikeButton } from "./LikeButton";
import { NameLetter } from "./NameLetter";
import Image from "next/image";

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

export const CollectionDisplay = (props) => {
  const { listOfPhotos, updateLikedList } = props;
  return (
    <Box sx={{ paddingLeft: "1%", paddingRight: "1%", paddingTop: "105px" }}>
      <Typography align="center" variant="h4">
        <strong>Liked Photos</strong>
      </Typography>
      {listOfPhotos.length <= 0 && (
        <Typography align="center" variant="subtitle1">
          <strong>No Liked Photos :(</strong>
        </Typography>
      )}

      <ImageList variant="masonry" cols={5} gap={12} sx={style}>
        {listOfPhotos.map((photo) => (
          <ImageListItem key={photo.id}>
            {/* <Image
              loader={myLoader}
              src="me.png"
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}

            <img
              style={{ borderRadius: "30px" }}
              src={`${photo.src.large2x}?w=500&fit=crop&auto=format`}
              srcSet={`${photo.src.large2x}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.url}
              loading="lazy"
            />
            <span className="spanner">
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
                    <a
                      href={photo.photographer_url}
                      className="PhotographerName"
                    >
                      {photo.photographer}
                    </a>
                  </Grid>
                }
                actionIcon={
                  <>
                    <LikeButton imageId={photo.id} callback={updateLikedList} />
                  </>
                }
              />
            </span>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
