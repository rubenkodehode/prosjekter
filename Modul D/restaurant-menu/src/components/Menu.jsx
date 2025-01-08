import React from "react";
import Dish from "./dish";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h2>{dish.tittel}</h2>
          <p>{dish.pris}</p>
          <p>{dish.ingredienser}</p>
          <span>{dish.kategori}</span>
        </div>
      ))}
    </div>
  );
}

export default Menu;
