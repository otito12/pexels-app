import { createClient } from "pexels";
const client = createClient(
  "563492ad6f9170000100000122e0b00db34542919901186d1593eff8"
);

const collectionsDb = {
  likedImages: {},
};

const addImageToCollecitonById = (collectionId, imageId) => {
  client.photos.show({ id: imageId }).then((photo) => {
    if (collectionId in collectionsDb) {
      if (!(photo.id in collectionsDb[collectionId])) {
        collectionsDb[collectionId][photo.id] = photo;
        console.log(collectionsDb);
      }
    }
  });
};

const removeImageFromCollecitonById = (collectionId, imageId) => {
  if (collectionId in collectionsDb) {
    if (imageId in collectionsDb[collectionId]) {
      delete collectionsDb[collectionId][imageId];
      console.log(collectionsDb);
    }
  }
};

const getCollectionByID = (collectionId) => {
  if (collectionId in collectionsDb) {
    let finalCollection = [];
    for (const i in collectionsDb[collectionId]) {
      finalCollection.push(collectionsDb[collectionId][i]);
    }
    console.log(finalCollection);
    return finalCollection;
  }
};

const inCollectionByID = (collectionId, imageId) => {
  if (collectionId in collectionsDb) {
    if (imageId in collectionsDb[collectionId]) {
      return true;
    }
    return false;
  }
  return false;
};

const CollectionsService = {
  addImageToCollecitonById,
  removeImageFromCollecitonById,
  getCollectionByID,
  inCollectionByID,
};

export default CollectionsService;
