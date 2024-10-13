import styles from "./ItemCard.module.css";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../store/itemSlice";

const ItemCard = ({ item }) => {
  const {
    item_id,
    name,
    quantity,
    category,
    price,
    status,
    brand,
    attributes,
    image_url,
  } = item;
  const dispatch = useDispatch();

  const attributesArray = Object.entries(attributes);
  return (
    <div className={styles.card}>
      <div
        className={styles.cancel}
        onClick={() => dispatch(setSelectedItem(null))}
      >
        X
      </div>
      <img src={image_url} alt="item-image" className={styles.productImage} />
      <h2 className={styles.title}>{name}</h2>
      <p>
        <strong>Brand:</strong> {brand}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span
          className={
            status === "out_of_stock" ? styles.outOfStock : styles.inStock
          }
        >
          {status}
        </span>
      </p>
      {attributesArray.map((e) => {
        return (
          <p>
            <strong>{e[0]}:</strong>{" "}
            <span className={styles.tag}>{e[1] === true ? "Yes" : e[1]}</span>
            <br></br>
          </p>
        );
      })}
    </div>
  );
};

export default ItemCard;
