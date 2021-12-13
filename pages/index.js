import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import curatedImages from "../services/curated_images";
import { useEffect, useState } from "react";
import Components from "../components/Components";

const Home = ({ data }) => {
  const [viewablePhotos, setViewablePhotos] = useState([]);
  const [numPhotosPerPage, setnumPhotos] = useState(10);

  useEffect(() => {
    curatedImages.getCuratedPhoto(10,1,setViewablePhotos)
  }, [])

  return (
    <div>
      <Components.PexelAppBar></Components.PexelAppBar>
      <Components.BoardSpeedDial></Components.BoardSpeedDial>
      <Components.PhotoList
        listOfPhotos={viewablePhotos}
        numPhotosPerPage={numPhotosPerPage}
        getCuratedPhotos={curatedImages.getCuratedPhoto}
        setViewablePhotos={setViewablePhotos}
      ></Components.PhotoList>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await curatedImages.getCuratedPhoto();
  const data = JSON.parse(JSON.stringify(res));
  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
