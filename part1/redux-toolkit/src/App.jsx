import { useDispatch } from "react-redux";
import Card from "./components/Card";
import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux/globalSlice";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ButtonToggle from "./components/ButtonToggle";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Counter></Counter>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
      <Sidebar />
      <ButtonToggle />
    </div>
  );
}

export default App;
