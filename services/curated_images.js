import { createClient } from "pexels";
const client = createClient(
  "563492ad6f9170000100000122e0b00db34542919901186d1593eff8"
);

const getCuratedPhotos = async (
  numPerPage = 10,
  pageNumber = 1,
  setViewablePhotos = (x) => {}
) => {
  return client.photos
    .curated({ page: pageNumber, per_page: numPerPage })
    .then((photos) => {
      // console.log(photos.photos);
      setViewablePhotos(photos.photos);
      return photos.photos;
    });
};

const curatedPhotoService = {
  getCuratedPhoto: getCuratedPhotos,
};

export default curatedPhotoService;
