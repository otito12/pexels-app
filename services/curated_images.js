import { createClient } from "pexels";
const client = createClient(
  "563492ad6f9170000100000122e0b00db34542919901186d1593eff8"
);

let allPhotos = [];
let loadRange = [1, 5];

const getSearch = async (
  numPerPage = 10,
  pageNumber = 1,
  query = "",
  setViewablePhotos = (x) => {}
) => {
  if (query && query.length > 0) {
    client.photos
      .search({ query, page: pageNumber, per_page: 50 })
      .then((photos) => {
        allPhotos = photos.photos;
        loadRange = [1, 5];
        setViewablePhotos(
          allPhotos.slice(
            pageNumber * numPerPage - numPerPage,
            pageNumber * numPerPage
          )
        );
        // just to force SSR
        return allPhotos.slice(0, 10);
      });
  } else {
    client.photos.curated({ page: pageNumber, per_page: 50 }).then((photos) => {
      allPhotos = photos.photos;
      setViewablePhotos(
        allPhotos.slice(
          pageNumber * numPerPage - numPerPage,
          pageNumber * numPerPage
        )
      );
      // just to force SSR
      return allPhotos.slice(0, 10);
    });
  }
};

const getCuratedPhotos = async (
  numPerPage = 10,
  pageNumber = 1,
  query = "",
  setViewablePhotos = (x) => {}
) => {
  if (allPhotos.length === 0) {
    // check if there are no photos in the allPhotos array
    console.log(loadRange);
    return client.photos
      .curated({ page: pageNumber, per_page: 50 })
      .then((photos) => {
        allPhotos = photos.photos;
        setViewablePhotos(
          allPhotos.slice(
            pageNumber * numPerPage - numPerPage,
            pageNumber * numPerPage
          )
        );
        // just to force SSR
        return allPhotos.slice(0, 10);
      });
  } else if (pageNumber >= loadRange[0] && pageNumber <= loadRange[1]) {
    // check if current page and photos per page within bounds of all photos
    // set viewable photos for those indexes
    console.log("Not-Reloading");
    console.log("LoadRange:", loadRange);
    console.log("PageNumber", pageNumber);
    console.log(allPhotos.length);
    console.log("Loaded Slice", [
      (pageNumber - loadRange[0]) * numPerPage,
      (pageNumber - loadRange[0]) * numPerPage + numPerPage,
    ]);
    // -----------------End Logs----------//

    setViewablePhotos(
      allPhotos.slice(
        (pageNumber - loadRange[0]) * numPerPage,
        (pageNumber - loadRange[0]) * numPerPage + numPerPage
      )
    );
    return allPhotos;
  } else if (pageNumber < loadRange[0] || pageNumber > loadRange[1]) {
    // load new Images around the new page
    let leftIndex = pageNumber - 2;
    let rightIndex = pageNumber + 2;
    if (leftIndex < 1) {
      rightIndex += Math.abs(leftIndex) + 1;
      leftIndex = 1;
    }
    if (rightIndex > 10) {
      leftIndex -= rightIndex - 10;
      rightIndex = 10;
    }
    loadRange = [leftIndex, rightIndex];
    //--------------Logs-----------------//
    console.log("Reloading");
    console.log("LoadRange:", loadRange);
    console.log("PageNumber", pageNumber);
    console.log("Loaded Slice", [
      (pageNumber - loadRange[0]) * numPerPage,
      (pageNumber - loadRange[0]) * numPerPage + numPerPage,
    ]);
    console.log(query);
    //-------------endlogs---------------//
    if (query && query.length > 0) {
      console.log(`I AM QUERY ${query}`);
      client.photos
        .search({ query, page: pageNumber, per_page: 50 })
        .then((photos) => {
          allPhotos = photos.photos;
          setViewablePhotos(
            allPhotos.slice(
              (pageNumber - loadRange[0]) * numPerPage,
              (pageNumber - loadRange[0]) * numPerPage + numPerPage
            )
          );
        });
    } else {
      return client.photos
        .curated({ page: leftIndex, per_page: 50 })
        .then((photos) => {
          allPhotos = photos.photos;
          setViewablePhotos(
            allPhotos.slice(
              (pageNumber - loadRange[0]) * numPerPage,
              (pageNumber - loadRange[0]) * numPerPage + numPerPage
            )
          );
        });
    }
  }
};

const curatedPhotoService = {
  getCuratedPhotos,
  getSearch,
};

export default curatedPhotoService;
