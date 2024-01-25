import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    console.log("MAIN");
  });

  return <h4>Main</h4>;
}
