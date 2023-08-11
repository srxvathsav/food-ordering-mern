import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./pages/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./pages/MyOrder";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/displayOrder" element={<MyOrder/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
