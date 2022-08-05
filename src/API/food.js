import axios from "axios";

// let endPoint = process.env.REACT_APP_API_ENDPOINT;

let getAllFood = async (page, pageSize) => {
  let foods = await axios.get(
    "https://world.openfoodfacts.org?json=true&page=" +
      page +
      "&page_size=" +
      pageSize
  );
  return foods;
};

let getFoodByID = async (foodID) => {
  let food = await axios.get(
    "https://world.openfoodfacts.org/api/v2/product/" + foodID
  );
  return food;
};

let FoodApi = {
  getAllFood,
  getFoodByID,
};

export default FoodApi;
