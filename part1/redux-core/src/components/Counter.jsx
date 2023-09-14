import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = (value) => {
    dispatch(incrementByValue(value));
  };
  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center gap-x-5">
        <button
          className="p-3 border border-gray-500"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="p-3 border border-gray-500"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="p-3 border border-gray-500"
          onClick={() => handleIncrementByValue(10)}
        >
          Increse by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
