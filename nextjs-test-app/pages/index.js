import { useEffect, useState } from "react";
import Axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ItemList";
import { Header, Divider, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const getData = async () => {
    await Axios.get(API_URL).then((response) => {
      console.log(response.data);
      setList(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | 박지후</title>
        <meta name="description" content="박지후 입니다" />
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loding
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
