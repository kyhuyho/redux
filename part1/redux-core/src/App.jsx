import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>The count from App is: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
