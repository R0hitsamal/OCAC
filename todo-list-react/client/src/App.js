import {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const handleClick = async () => {
    if (input.trim() === "") return;

    try {
      await axios.post("http://localhost:5000/addTask", {task: input});
      setInput("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
    getData()
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/");
    setData( res.data);
  };
  useEffect(() => {
    getData();
  }, [data]);
  console.log(data)
  return (
    <div className="container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        id="input-box"
        placeholder="Add to the list"
      />
      <button onClick={handleClick} id="addBtn">
        Add
      </button>

      <ul className="todobox">
        {
          !data ? "loading" : data.map((d, idx) => {
          return <li key={idx}>{d.task} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
