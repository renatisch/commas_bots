import ResponsiveNavBar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/pages/error-page";
import Bots from "./components/pages/Bots";
import Deals from "./components/pages/Deals";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveNavBar />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/bots" element={<Bots />} errorElement={<ErrorPage />} />
          <Route
            path="/deals"
            element={<Deals />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
