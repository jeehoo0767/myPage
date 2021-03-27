import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ItemList from './ItemList';
import styles from './ItemList.module.css';
function Container() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    ).then((response) => {
      if (response.data) {
        console.log(response.data);
        setList(response.data);
      } else {
        alert('데이터 가져오기 실패');
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

{
  /* <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid> */
}
export default Container;
