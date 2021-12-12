import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import curatedImages from "../services/curated_images";
import { useEffect, useState } from "react";

const Home = ({ data }) => {
  const [viewablePhotos, setViewablePhotos] = useState(data);
  const [numPhotos, setnumPhotos] = useState(10);

  const getCuratedPhotos = async () => {
    curatedImages.getCuratedPhoto(numPhotos, setViewablePhotos);
  };

  useEffect(() => {
    getCuratedPhotos();
  }, []);

  return (
    <div className={styles.container}>
      Here for Rokt
      <br />
      {viewablePhotos.map((photo) => (
        <>
          <img src={photo.src.small}></img>
        </>
      ))}
      <button onClick={getCuratedPhotos}>get Photos</button>
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
