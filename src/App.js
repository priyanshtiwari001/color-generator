import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [lists, setLists] = useState(new Values("#f15023").all(10));

  const handleSumbit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setLists(colors);
      //console.log(lists);
    } catch (error) {
      setError(true);
      //console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSumbit}>
          <input
            placeholder="#f15023"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />

          <button className="btn" type="submit">
            Sumbit
          </button>
        </form>
      </section>
      <section className="colors">
        {lists.map((colour, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...colour}
              hexColor={colour.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
