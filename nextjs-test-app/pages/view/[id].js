import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const API_URL = `http://makeup-api/herokuapp.com/api/v1/products/${id}.json`;
  const getData = () => {
    Axios.get(API_URL).then((response) => {
      console.log(response.data);
    });
  };
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return <div></div>;
};

export default Post;
