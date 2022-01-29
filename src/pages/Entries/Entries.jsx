import React from "react";
import FoodLogEntry from "../../components/FoodLogEntry";
import FoodLog from "../../components/FoodLog";
import "./style.scss";

const Entries = (props) => {
  return (
    <div className="entries">
      <h2>Food Log</h2>
      <FoodLogEntry></FoodLogEntry>
      <FoodLog></FoodLog>
    </div>
  );
};

export default Entries;
