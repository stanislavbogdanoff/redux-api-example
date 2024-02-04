import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((state) => state.counter);
  const color = useSelector((state) => state.color);

  return (
    <div>
      <h1>Display: {counter}</h1>
      <h2>Color: {color}</h2>
    </div>
  );
};

export default Display;
