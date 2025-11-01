import "./FormPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormPage = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    address: "",
    pin: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      await axios.post("http://localhost:3000/api/form", formdata);
    } catch (error) {
      console.error("Submission error:", error);
    }
    navigate("/");
  };
  return (
    <div className="form-container">
      <h2>Form</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required 
            value={formdata.name}
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            required
            value={formdata.age}
            onChange={handleChange}
            type="number"
            id="age"
            placeholder="Enter your age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            required
            value={formdata.address}
            onChange={handleChange}
            id="address"
            placeholder="Enter your address"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="pin">PIN:</label>
          <input
            required
            value={formdata.pin}
            onChange={handleChange}
            type="text"
            id="pin"
            placeholder="Enter your PIN code"
          />
        </div>

        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
