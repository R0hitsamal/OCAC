import FormPage from "./components/FormPage";
import FormData from "./components/FormData";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Update from "./components/Update";
function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/post">New</Link>
      <Link to="/">Home</Link>
    </nav>
      <Routes>
        <Route path="/post" element={<FormPage />} />
        <Route path="/" element={<FormData />} />
        <Route path="/:id/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;