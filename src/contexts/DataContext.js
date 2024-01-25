import { useState, createContext } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider value={{ posts, getPosts }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
