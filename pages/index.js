import curatedImages from "../services/curated_images";
import { useEffect, useState } from "react";
import Components from "../components/Components";
import Link from "next/link";

const Home = (props) => {
  const [viewablePhotos, setViewablePhotos] = useState([]);
  const [numPhotosPerPage, setnumPhotos] = useState(10);

  useEffect(() => {
    curatedImages.getCuratedPhotos(10, 1, "", setViewablePhotos);
  }, []);

  return (
    <div>
      <Components.PhotoList
        listOfPhotos={viewablePhotos}
        numPhotosPerPage={numPhotosPerPage}
        getCuratedPhotos={curatedImages.getCuratedPhotos}
        setViewablePhotos={setViewablePhotos}
      ></Components.PhotoList>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await curatedImages.getCuratedPhotos();
  const data = JSON.parse(JSON.stringify(res));
  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
