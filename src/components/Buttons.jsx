import { useDispatch } from "react-redux";
import { minusOne, plusOne, reset } from "../redux/slices/counterSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(plusOne())}>+1</button>
        <button onClick={() => dispatch(minusOne())}>-1</button>
        <button onClick={() => dispatch(reset())}>Обнулить</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RED" })}>RED</button>
        <button onClick={() => dispatch({ type: "BLUE" })}>BLUE</button>
      </div>
    </div>
  );
};

export default Buttons;
