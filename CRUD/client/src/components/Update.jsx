import { useEffect, useState } from "react";
import axios from "axios";
import "./FormPage.css";
import { useParams, useNavigate } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    address: "",
    pin: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/formdata/${id}`);
        setFormdata({
          name: res.data.name || "",
          age: res.data.age || "",
          address: res.data.address || "",
          pin: res.data.pin || "",
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      await axios.patch(`http://localhost:3000/api/${id}/update`, formdata);
    } catch (error) {
      console.error("Submission error:", error);
    }
    navigate("/");
  };
  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <h2>UPDATE</h2>
      <form className="user-form">
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
          Save
        </button>
      </form>
    </div>
  );
};
export default Update;
