import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <FileCopyIcon sx={{ color: "white" }} />, name: "Copy" },
  { icon: <SaveIcon sx={{ color: "white" }} />, name: "Save" },
  { icon: <PrintIcon sx={{ color: "white" }} />, name: "Print" },
  { icon: <ShareIcon sx={{ color: "white" }} />, name: "Share" },
  { icon: <ShareIcon sx={{ color: "white" }} />, name: "Share" },
];

export const BoardSpeedDial = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          "& .MuiButtonBase-root": {
            background: "#FF3333",
          },
        }}
        icon={<SpeedDialIcon sx={{}} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
