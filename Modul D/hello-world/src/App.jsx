import Header from "./components/Header";
import Greeting from "./components/Header";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Barn from "./components/Barn";
import "./App.css";

const fruits = [
  {
    id: 1,
    name: "Apple",
    type: "Pome",
    size: "Medium",
    color: "Red",
    isTropical: false,
  },
  {
    id: 2,
    name: "Banana",
    type: "Berry",
    size: "Medium",
    color: "Yellow",
    isTropical: true,
  },
  {
    id: 3,
    name: "Cherry",
    type: "Drupe",
    size: "Small",
    color: "Red",
    isTropical: false,
  },
  {
    id: 4,
    name: "Mango",
    type: "Drupe",
    size: "Large",
    color: "Orange",
    isTropical: true,
  },
  {
    id: 5,
    name: "Watermelon",
    type: "Pepo",
    size: "Very Large",
    color: "Green",
    isTropical: false,
  },
  {
    id: 6,
    name: "Pineapple",
    type: "Multiple Fruit",
    size: "Large",
    color: "Brown",
    isTropical: true,
  },
  {
    id: 7,
    name: "Blueberry",
    type: "Berry",
    size: "Small",
    color: "Blue",
    isTropical: false,
  },
  {
    id: 8,
    name: "Grapes",
    type: "Berry",
    size: "Small",
    color: "Green or Purple",
    isTropical: false,
  },
  {
    id: 9,
    name: "Kiwi",
    type: "Berry",
    size: "Medium",
    color: "Brown",
    isTropical: true,
  },
  {
    id: 10,
    name: "Strawberry",
    type: "Aggregate Fruit",
    size: "Small",
    color: "Red",
    isTropical: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Header2 text="Hello!" name="Ruben" age={25} hobbies="Gaming" />
      <Greeting />
      <Header3 fruits={fruits} />
      <Barn text="This is written from BarneBarn" />
    </div>
  );
}

export default App;
