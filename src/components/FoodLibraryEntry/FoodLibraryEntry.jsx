import React, { useState } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());
const FoodLibraryEntry = (props) => {
  const [newDescriptor, setNewDescriptor] = useState([]);

  const addDescriptor = () => {
    setNewDescriptor([...newDescriptor, { id: uuidv4() }]);
  };

  const deleteDescriptor = (id) => {
    setNewDescriptor(newDescriptor.filter((e) => e.id !== id));
  };

  return (
    <div className="food-library-entry">
      <label>
        Category <input type="text" />
      </label>
      <label>
        Subcategory <input type="text" />
      </label>
      <label className="grams">
        <input type="number" />
        Grams
      </label>
      {newDescriptor?.map((e) => {
        return (
          <div className="new-descriptor" key={e.id}>
            <input type="number" placeholder="Amount" />
            <input type="text" placeholder="name" />
            <button onClick={() => deleteDescriptor(e.id)}>x</button>
          </div>
        );
      })}
      <p onClick={addDescriptor}>add new descriptor</p>
      <label>
        kcal <input type="number" />
      </label>
      <label>
        Proteins <input type="number" />
      </label>
      <label>
        Fats <input type="number" />
      </label>
      <label>
        Carbs <input type="number" />
      </label>
      <div className="buttons">
        <button>ADD</button>
        <button className="clear-button">CLEAR</button>
      </div>
    </div>
  );
};

export default FoodLibraryEntry;
