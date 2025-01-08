import styled from "styled-components";

// bruk back-tics rett bak html elementet for å lage en css blokk
// I css blokken bruker du helt vanlig css med noen få unntak
const Button = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export default Button;
