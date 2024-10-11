import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </>
  );
}

export default App;
