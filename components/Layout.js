import React from "react";
import Components from "../components/Components";

export const Layout = ({ children }) => {
  return (
    <div>
      <Components.PexelAppBar></Components.PexelAppBar>
      <Components.BoardSpeedDial></Components.BoardSpeedDial>
      {children}
    </div>
  );
};
