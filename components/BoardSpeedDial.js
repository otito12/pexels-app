import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

const actions = [
  { icon: <FavoriteIcon sx={{ color: "white" }} />, name: "Liked Photos" },
];

const useStyles = makeStyles((theme) => ({
  open: {
    position: "fixed",
    bottom: 16,
    right: 16,
    "& .MuiButtonBase-root": {
      background: "#FF3333",
    },
  },
  closed: {
    position: "fixed",
    bottom: 16,
    right: 16,
    "& .MuiButtonBase-root": {
      background: "#FF3333",
    },
  },
}));

export const BoardSpeedDial = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (e, path) => {
    e.preventDefault();
    router.push(path);
  };

  const classes = useStyles();

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          "& .MuiButtonBase-root": {
            background: "#FF3333",
          },
        }}
        className={open ? classes.open : classes.closed}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => handleClick(e, "/likedPhotos")}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
