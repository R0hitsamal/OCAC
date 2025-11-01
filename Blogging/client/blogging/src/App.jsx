import "./App.css";
import Signup from "./pages/Auth/Signup";
import Login from "./pages//Auth/Login";
import Container from "@mui/material/Container";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import DrawerAppBar from "./components/navbar/Navbar";
import Listing from "./pages/Listing/Listing";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Router>
        <DrawerAppBar />
        <Container maxWidth="xlg">
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}
export default App;
