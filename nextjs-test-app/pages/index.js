import { useEffect, useState } from "react";
import Axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemList from "../pages/src/component/ItemList";
import { Header, Divider } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const getData = async () => {
    await Axios.get(API_URL).then((response) => {
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
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  );
}
