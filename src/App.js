import CounterContextProvider from "./contexts/CounterContext";
import DataContextProvider from "./contexts/DataContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <CounterContextProvider>
      <DataContextProvider>
        <Header />
        <Main />
        <Footer />
      </DataContextProvider>
    </CounterContextProvider>
  );
}
