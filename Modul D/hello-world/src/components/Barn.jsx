import BarneBarn from "./BarneBarn";
// import "./Barn.css";

const Barn = (props) => {
  return (
    <div>
      <BarneBarn text={props.text} />
    </div>
  );
};

export default Barn;
