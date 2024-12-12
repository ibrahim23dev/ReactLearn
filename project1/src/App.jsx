import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");

  const handelitem = () => {
    if (!item.trim()) {
      alert("Please input a valid data");
      return;
    }
    setTodo([...item, item.trim()]);
    setItem("");
  };
  return (
    <div className=" items-center justify-center mt-56 ml-56 mr-56 bg-slate-200">
      <h1>Item List Manager</h1>
      <h3>Item List</h3>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter Data"
      />

      <div>
        <button
          className=" bg-lime-500 text-white w-60 h-10 rounded-xl hover:bg-amber-100 shadow-lg"
          onClick={handelitem}
        >
          Add Item
        </button>
      </div>

      <div>
        <ul>
          {todo.map((add, index) => (
            <li>{add}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
