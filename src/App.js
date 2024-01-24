import { useEffect } from "react";
import observable from "./demo/observer/Observer";

export default function App() {
  function eat(data) {
    console.log(`eat ${data}`);
  }
  function walk(data) {
    console.log(`walk ${data}`);
  }
  function speak(data) {
    console.log(`speak ${data}`);
  }

  useEffect(() => {
    observable.subscribe(eat);
    observable.subscribe(walk);
    observable.subscribe(speak);
  }, []);

  useEffect(() => {
    console.log("RENDER");
  });

  return (
    <div style={{ border: "1px solid" }}>
      <button onClick={() => observable.notify("Eat")}>Eat</button>
    </div>
  );
}
