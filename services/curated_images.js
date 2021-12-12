import { createClient } from "pexels";
const client = createClient(
  "563492ad6f9170000100000122e0b00db34542919901186d1593eff8"
);

const getCuratedPhotos = async (
  numPages = 10,
  setViewablePhotos = (x) => {}
) => {
  return client.photos.curated({ per_page: numPages }).then((photos) => {
    // console.log(photos.photos);
    setViewablePhotos(photos.photos);
    return photos.photos;
  });
};

const curatedPhotoService = {
  getCuratedPhoto: getCuratedPhotos,
};

export default curatedPhotoService;
