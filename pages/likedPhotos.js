import React, { useState } from "react";
import Components from "../components/Components";
import CollectionsService from "../services/collections";

const likedPhotos = (props) => {
  const [likedList, setlikedList] = useState(
    CollectionsService.getCollectionByID("likedImages")
  );

  const updateLikedList = () => {
    setlikedList(CollectionsService.getCollectionByID("likedImages"));
  };

  return (
    <Components.CollectionDisplay
      listOfPhotos={likedList}
      updateLikedList={updateLikedList}
    ></Components.CollectionDisplay>
  );
};

export default likedPhotos;
