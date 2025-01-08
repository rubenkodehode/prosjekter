// import styles from "./Header.module.css";
import Button from "../styled-components/button";
import "/src/styled-components/Button.jsx";

const greetingStyle = {
  color: "green",
  backgroundColor: "black",
};

function greet() {
  return "Hello World! From a private function!";
}

export default function Header() {
  return (
    <>
      <h1 style={greetingStyle}>{greet()}</h1>
      <Button>Press me</Button>
    </>
  );
}

export function Greeting() {
  return <h1>{greet()}</h1>;
}

// export default Header;
