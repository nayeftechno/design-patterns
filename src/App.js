import CounterContextProvider from "./contexts/CounterContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <CounterContextProvider>
      <Header />
      <Main />
      <Footer />
    </CounterContextProvider>
  );
}
