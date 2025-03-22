import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <div className="mt-[30px]">
        <Hero />
      </div>
    </>
  );
}

export default App;
