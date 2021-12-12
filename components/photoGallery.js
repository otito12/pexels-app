import React from "react";
import { PhotoCard } from "./photoCard";

export const PhotoGallery = (props) => {
  const { listOfPhotos, ...other } = props;
  return (
    <>
      <div>
        <p style={{ border: "1px solid black" }}>Here for Rokt</p>
        <br />
        {listOfPhotos.map((photo) => (
          <>
            <PhotoCard key={photo.id} image={photo}></PhotoCard>
            <br />
          </>
        ))}
        <button>get Photos</button>
      </div>
    </>
  );
};
