import React, { useState, useEffect } from "react";
import Axios from "axios";
import ItemList from "./ItemList";
function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    ).then((response) => {
      if (response.data) {
        console.log(response.data);
        setList(response.data);
      } else {
        alert("데이터 가져오기 실패");
      }
    });
  }, []);
  return (
    <div>
      <h3 style={{ paddingTop: 40 }}>베스트 상품</h3>
      <hr />
      <ItemList list={list.slice(0, 9)} />
      <h3 style={{ paddingTop: 40 }}>신상품</h3>
      <hr />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

export default App;
