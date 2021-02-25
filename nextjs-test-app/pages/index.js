import { useEffect, useState } from "react";
import Axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = uLeState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const getData = () => {
    Axios.get(API_URL).then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 박지후</title>
      </Head>
    </div>
  );
}
