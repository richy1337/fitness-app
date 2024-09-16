import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//Components
import Form from "./components/onboard/Form"
import MacroLog from "./components/nutrition/MacroLog"
import Dashboard from "./components/overview/Dashboard"
import Navbar from "./components/navbar/Navbar"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
