import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import CollectionsService from "../services/collections";

const useStyles = makeStyles((theme) => ({
  unLiked: {
    color: "rgba(0, 0, 0, 0.4)",
  },
  liked: {
    color: "#FF648E",
  },
}));

export const LikeButton = (props) => {
  const { imageId, callback } = props;
  const [isLiked, setIsLiked] = useState(
    CollectionsService.inCollectionByID("likedImages", imageId)
  );

  const classes = useStyles();

  const handleChange = (e) => {
    setIsLiked(!isLiked);
    // Call collections service to add by id to liked collections
    if (isLiked) {
      CollectionsService.removeImageFromCollecitonById("likedImages", imageId);
      if (callback) {
        callback();
      }
    } else {
      CollectionsService.addImageToCollecitonById("likedImages", imageId);
      if (callback) {
        callback();
      }
    }
  };

  return (
    <IconButton
      className={isLiked ? classes.liked : classes.unLiked}
      aria-label={`info about a`}
      onClick={handleChange}
    >
      <FavoriteIcon />
    </IconButton>
  );
};
