import React, { useState } from "react";
import "./style.scss";
import { v4 as uidv4 } from "uuid";
import FoodEntryCard from "../FoodEntryCard";

const FoodLogEntry = (props) => {
  const [newFoodEntry, setNewFoodEntry] = useState([]);

  const addFoodEntryCard = () => {
    setNewFoodEntry([...newFoodEntry, { id: uidv4() }]);
  };

  const deleteFoodEntryCard = (id) => {
    setNewFoodEntry(newFoodEntry.filter((e) => e.id !== id));
  };

  return (
    <>
      <div className="food-log-entry">
        <div className="name-date-entry">
          <input type="text" placeholder="ENTER A NAME" />
          <input type="date" />
        </div>
        <div className="sum-per-meal">
          <div>0 kcal</div>
          <div>0 fats</div>
          <div>0 proteins</div>
          <div>0 carbs</div>
        </div>
        <div className="food-entry-cards">
          {newFoodEntry?.map((e) => {
            return (
              <FoodEntryCard
                key={e.id}
                id={e.id}
                deleteFoodEntryCard={deleteFoodEntryCard}
              ></FoodEntryCard>
            );
          })}
          <div className="add-entry-card" onClick={addFoodEntryCard}>
            <p>Add new record</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>SAVE</button>
        <button className="clear-button">CLEAR</button>
      </div>
    </>
  );
};

export default FoodLogEntry;
