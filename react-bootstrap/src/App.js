import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Container from './Container';
import { Switch, Route } from 'react-router-dom';

function App() {
  return <Container />;
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
}
export default App;
