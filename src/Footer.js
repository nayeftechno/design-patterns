import { useEffect, useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

export default function Footer() {
  const { counter } = useContext(CounterContext);
  useEffect(() => {
    console.log("FOOTER");
  });

  return <h4>Footer {counter}</h4>;
}
