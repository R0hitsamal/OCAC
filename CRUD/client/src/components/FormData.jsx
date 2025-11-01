import axios from "axios";
import { useEffect, useState } from "react";
import "./FormData.css";
import {useNavigate} from "react-router-dom"

const FormData = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:3000/api/formdata");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/${id}/delete`);
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (id) => {
    navigate(`/${id}/update`)
  };
  return (
    <div className="container">
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Age:</strong> {item.age}
              </p>5
              <p>
                <strong>Address:</strong> {item.address}
              </p>
              <p>
                <strong>Pin:</strong> {item.pin}
              </p>
              <div className="btns">
                <button onClick={()=>handleUpdate(item._id)}>Update</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormData;
