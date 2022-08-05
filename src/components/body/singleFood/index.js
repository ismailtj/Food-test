import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Divider, Chip } from "@mui/material";

import FoodApi from "../../../API/food";

import FoodImgs from "./FoodImgs";

const style = {
  position: "absolute",
  width: "calc(100% - 80px)",
  maxWidth: 900,
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pb: 4,
};

const SingleFoodModal = ({ open, handleClose, foodID = null }) => {
  const [FoodObj, setFoodObj] = useState({});
  const [IsDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(false);
    if (foodID !== null) {
      FoodApi.getFoodByID(foodID)
        .then((x) => {
          console.log("single");
          console.log(x.data.product);
          setFoodObj(x.data.product);
          if (!IsDataLoaded) {
            setIsDataLoaded(true);
          }
        })
        .catch((err) => alert("error", err));
    }
  }, [foodID, open]);

  if (!IsDataLoaded) {
    return <></>;
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          ...style,
          overflow: "auto",
        }}
      >
        <div
          style={{
            padding: 20,
            color: "#fff",
            backgroundColor: "#007aff",
          }}
        >
          Info
        </div>
        <FoodImgs
          imgList={[
            FoodObj.image_url ? FoodObj.image_url : false,
            FoodObj.image_front_url ? FoodObj.image_front_url : false,
            FoodObj.image_ingredients_url
              ? FoodObj.image_ingredients_url
              : false,
            FoodObj.image_nutrition_url ? FoodObj.image_nutrition_url : false,
            FoodObj.image_packaging_url ? FoodObj.image_packaging_url : false,
          ]}
        />
        <div style={{ padding: 8 }}>
          <Divider />
          <div>
            <Typography variant="h3" component="h2">
              {FoodObj.product_name_fr}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {FoodObj.brands}
            </Typography>
          </div>
          <Divider textAlign="left">
            <Chip label="Ingrediants" />
          </Divider>
          <div
            style={{
              padding: 10,
            }}
          >
            {FoodObj.ingredients_text_fr}
          </div>
          <Divider textAlign="left">
            <Chip label="Texte d'emballage" />
          </Divider>
          <div
            style={{
              padding: 10,
            }}
          >
            {FoodObj.packaging_text_fr}
          </div>
          <Divider textAlign="left">
            <Chip label="Magasins" />
          </Divider>
          <div
            style={{
              padding: 10,
            }}
          >
            {FoodObj.stores}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SingleFoodModal;
