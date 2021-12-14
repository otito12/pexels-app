import { createClient } from "pexels";
const key = process.env.API_KEY;
// there is a bug with the createClient that does not allow process.env.API_KEY to create the client
// go ahead and insert your api key as a string
const client = createClient("API_KEY as string");

const collectionsDb = {
  likedImages: {},
};

const addImageToCollecitonById = (collectionId, imageId) => {
  client.photos.show({ id: imageId }).then((photo) => {
    if (collectionId in collectionsDb) {
      if (!(photo.id in collectionsDb[collectionId])) {
        collectionsDb[collectionId][photo.id] = photo;
      }
    }
  });
};

const removeImageFromCollecitonById = (collectionId, imageId) => {
  if (collectionId in collectionsDb) {
    if (imageId in collectionsDb[collectionId]) {
      delete collectionsDb[collectionId][imageId];
    }
  }
};

const getCollectionByID = (collectionId) => {
  if (collectionId in collectionsDb) {
    let finalCollection = [];
    for (const i in collectionsDb[collectionId]) {
      finalCollection.push(collectionsDb[collectionId][i]);
    }
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
