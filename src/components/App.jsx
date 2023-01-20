import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [arrItem, setArrItem] = useState([])

  function handleClick() {
    setArrItem(prevArr => [...arrItem, item])
    setItem("")
    console.log(arrItem);
  }

  function handleInput(e) {
    const currentItem = e.target.value;
    console.log(currentItem);
    setItem(currentItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
       
          {arrItem.map(item => <li>{item}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
