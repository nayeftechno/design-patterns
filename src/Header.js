import { useEffect, useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

export default function Header() {
  const { counter, setCounter } = useContext(CounterContext);
  useEffect(() => {
    console.log("HEADER");
  });

  return (
    <h4
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      Header
    </h4>
  );
}
