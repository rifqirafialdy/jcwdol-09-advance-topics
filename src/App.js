import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LearnHoc from "./pages/LearnHoc";

function App() {
  const Button = (props) => <button style={props.style}>Click </button>;
  const styleBtn = LearnHoc(Button);
  return (
    <div>
      {styleBtn()}
      <Routes>
        <Route path="/" element={<LearnHoc />} />
      </Routes>
    </div>
  );
}

export default App;
