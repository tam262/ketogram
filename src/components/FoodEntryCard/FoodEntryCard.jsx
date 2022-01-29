import React from "react";
import "./style.scss";

const FoodEntryCard = (props) => {
  return (
    <div className="food-entry-card">
      <button
        onClick={() => {
          props.deleteFoodEntryCard(props.id);
        }}
      >
        x
      </button>
      <p>Start typing...</p>
      <div>
        <input type="number" placeholder="amount" />
        <select>
          <option value="" disabled selected hidden>
            Select your option
          </option>
        </select>
      </div>
      <div className="macro-nutrients">
        <div>
          <p>kcal</p>
          <p>0</p>
        </div>
        <div>
          <p>Fats</p>
          <p>0</p>
        </div>
        <div>
          <p>Proteins</p>
          <p>0</p>
        </div>
        <div>
          <p>Carbs</p>
          <p>0</p>
        </div>
      </div>
      <div>
        <p>Select a food</p>
      </div>
    </div>
  );
};

export default FoodEntryCard;
