function App() {
  const handleClick = () => {
    import("./demo/module/math").then(({ add, multiply }) => {
      console.log(add(4, 6, 7));
    });
  };
  return (
    <div style={{ padding: "30px" }}>
      <h1>Look before U leap</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
