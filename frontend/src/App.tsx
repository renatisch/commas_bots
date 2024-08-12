import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Bots from "./components/pages/Bots";
import Deals from "./components/pages/Deals";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
