import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
export default function ItemList(props) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {props.list.map((item) => {
            return (
              <div className={styles.wrap}>
                <Grid.Column>
                  <img src={item.image_link} alt={item.name} />
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </Grid.Column>
              </div>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}
