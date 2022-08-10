import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextTools" about="About Us" />
      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading="Enter text to analyze..." />
      </div>
    </>
  );
}

export default App;
