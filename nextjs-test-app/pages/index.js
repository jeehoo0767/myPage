import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const getData = () => {
    Axios.get(API_URL).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 박지후</title>
      </Head>
    </div>
  );
}
