import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    console.log("HEADER");
  });

  return <h4>Header</h4>;
}
