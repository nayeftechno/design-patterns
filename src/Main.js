import { useEffect, useContext } from "react";
import { DataContext } from "./contexts/DataContext";

export default function Main() {
  const { posts, getPosts } = useContext(DataContext);
  useEffect(() => {
    console.log("MAIN");
  });

  return <h4 onClick={getPosts}>Main {posts?.length}</h4>;
}
