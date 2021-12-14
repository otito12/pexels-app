import curatedImages from "../services/curated_images";
import { useEffect, useState, useContext } from "react";
import Components from "../components/Components";
import { viewablePhotosContext } from "../contexts/viewablePhotos";

const Home = (props) => {
  const { pageProps } = props;
  const [numPhotosPerPage, setnumPhotos] = useState(10);
  const { viewablePhotos, setViewablePhotos } = useContext(
    viewablePhotosContext
  );

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
