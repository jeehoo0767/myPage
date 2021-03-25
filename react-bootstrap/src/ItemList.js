import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
function ItemList(props) {
  const {list} = props;
  return (
    <div>
       <Container>
        <Row xs="3">
          {list.map((item) => {
            <Col key={item.id}>
              <div className={StyleSheet.wrap}>
                <img src={item.image_link} alt={item.name} className={StyleSheet.img_item}/>
                <strong className={StyleSheet.tit_item}>{item.name}</strong>
                <span className={styles.txt_info}>
                  {item.category} {item.product_type}
                </span>
                {/* <strong className={styles.num_price}>${item.price}</strong> */}
              </div>
            </Col>
          })}
        </Row>
    </Container>
      {/* <Grid columns={3}>
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
      </Grid> */}
    </div>
  );
}

export default ItemList;
