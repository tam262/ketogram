import React from "react";
import "./style.scss";
import FoodLibraryEntry from "../../components/FoodLibraryEntry";

const FoodLibrary = (props) => {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="food-library">
      <h2>Food Library</h2>
      <FoodLibraryEntry></FoodLibraryEntry>
      <div className="food-library-table">
        <div className="table-data">
          <span>CATEGORY</span>
          <span>SUBCATEGORY</span>
          <span>GRAMS</span>
          <span>KCAL</span>
          <span>FATS</span>
          <span>PROTEIN</span>
          <span>CARBS</span>
        </div>
        {numbers.map((e, i) => {
          return (
            <div className="table-row" key={i}>
              cao
              <button>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodLibrary;
