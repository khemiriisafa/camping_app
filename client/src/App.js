import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";
import Events from "./pages/Events";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
