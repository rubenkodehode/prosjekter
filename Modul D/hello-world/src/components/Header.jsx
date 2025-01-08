import styles from "./Header.module.css";

function greet() {
  return "Hello World! From a private function!";
}

export default function Header() {
  return <h1 className={styles.header}>{greet()}</h1>;
}

export function Greeting() {
  return <h1>{greet()}</h1>;
}

// export default Header;
