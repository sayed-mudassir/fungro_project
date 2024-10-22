import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Nav from "./components/Navbar";
import Promo from "./components/promotion";
import Teen from "./components/Teen";

function App() {
  return (
    <Router>
      <Promo />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/teen"
          element={
            <Teen/>
          }
        />
        <Route
          path="*"
          element={
            <div
              style={{
                background: "#121E2C",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1 style={{ color: "white", fontSize: "100px" , margin:"0", padding:"0"}}>wrong path</h1>
              <p style={{ color: "white", fontSize:"40px", padding:"10px", margin:"0" }}>
                Go to Home <Link to="./">Home</Link>
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
