import React from "react";
import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ dishes, selectedCategory, searchTerm }) {
  const filteredDishes = dishes
    .filter((dish) =>
      selectedCategory === "Alle" ? true : dish.kategori === selectedCategory
    )
    .filter(
      (dish) =>
        dish.tittel.toLowerCase().includes(searchTerm) ||
        dish.ingredienser.toLowerCase().includes(searchTerm)
    );

  return (
    <div className={styles.menuGrid}>
      {filteredDishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default Menu;
