import React, { useState } from "react";
import Components from "../components/Components";
import { viewablePhotosContext } from "../contexts/viewablePhotos";

export const Layout = ({ children }) => {
  const [viewablePhotos, setViewablePhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div>
      <viewablePhotosContext.Provider
        value={{
          viewablePhotos,
          setViewablePhotos,
          searchQuery,
          setSearchQuery,
          pageNumber,
          setPageNumber,
        }}
      >
        <Components.PexelAppBar></Components.PexelAppBar>
        <Components.BoardSpeedDial></Components.BoardSpeedDial>
        {children}
      </viewablePhotosContext.Provider>
    </div>
  );
};
