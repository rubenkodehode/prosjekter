import React from "react";
import styles from "./Dish.module.css";

function Dish({ dish }) {
  return (
    <div className={styles.dishCard} data-category={dish.kategori}>
      <h2 className={styles.dishTitle}>{dish.tittel}</h2>
      <p className={styles.dishPrice}>{dish.pris}</p>
      <p className={styles.dishIngredients}>{dish.ingredienser}</p>
      <span className={styles.dishCategory}>{dish.kategori}</span>
    </div>
  );
}

export default Dish;
