import React from "react";
import { meny } from "./data/meny";
import Menu from "./components/menu";
import styles from "./App.module.css";

console.log(meny);
function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Restaurant Meny</h1>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;
