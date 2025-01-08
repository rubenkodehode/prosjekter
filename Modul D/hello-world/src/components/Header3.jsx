// import styles from './Header2.module.css';

const Header3 = (props) => {
  // Bruk map funksjon når dere skal gå igjennom en array av objekter
  // ForEach funksjonen fungerer ikke pga at den ikke returnerer en ny liste
  // bestående av det ene elementet, slik map funksjonen gjør.

  return (
    <div>
      {/* <p>Fra HEADER3</p> */}
      {props.fruits.map((fruit, index) => {
        return (
          <div key={index}>
            <p> {fruit.name} </p>
            <p> {fruit.type} </p>
            <p> {fruit.size} </p>
            <p> {fruit.color} </p>
            <p> {fruit.isTropical ? "Tropical" : "Not Tropical"} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Header3;
