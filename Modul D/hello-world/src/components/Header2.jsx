import styles from "./Header2.module.css";

const Header2 = ({ text, name, age, hobbies }) => {
  return (
    <div>
      <h1 className={styles.header2}>{text}</h1>
      <h2 className={styles.header2}>{name}</h2>
      <h3 className={styles.header2}>{age}</h3>
      <h4 className={styles.header2}>{hobbies}</h4>
    </div>
  );
};

export default Header2;

// React pakker inn attributter til et objekt og sender det inn i
// komponenten som en "parameter":
/*
    {
        text: "object",
        name: "John",
        age: 25,
        hobbies: "Gaming"
    }
*/

//Eksempel på JS Objekt:
/*
    {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    }

*/
