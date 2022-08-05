import React from "react";
import FoodList from "../body/foodList/FoodList";

const Body = () => {
  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "auto",
        padding: "30px 30px",
      }}
    >
      <FoodList />
    </div>
  );
};

export default Body;
