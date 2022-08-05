import React, { useEffect, useState } from "react";
import FoodApi from "../../../API/food";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import Pagination from "@mui/material/Pagination";

import SingleFoodModal from "../singleFood/index";

import "./style.css";

const FoodList = () => {
  const [Count, setCount] = useState(0);
  const [FoodList, setFoodList] = useState([]);
  const [Page, setPage] = useState(1);
  const [PageSize, setPageSize] = useState(5);

  const [IsSingleFoodModalOpen, setIsSingleFoodModalOpen] = useState(false);
  const [SingleFoodID, setSingleFoodID] = useState();

  useEffect(() => {
    FoodApi.getAllFood(Page, PageSize)
      .then((x) => {
        setFoodList(x.data.products);
        setCount(x.data.count);
      })
      .catch((err) => alert("Erreur: ", err));
  }, [Page, PageSize]);

  console.log(FoodList);

  return (
    <div
      style={{
        minHeight: 200,
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              bgcolor: "primary.main",
            }}
          >
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                }}
                align="left"
              >
                Nom / Marque
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                }}
                align="left"
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                }}
                align="left"
              >
                Ingredients
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="food-table-body">
            {FoodList.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                onClick={() => {
                  console.log(row.url);
                  setSingleFoodID(row._id);
                  setIsSingleFoodModalOpen(true);
                }}
              >
                <TableCell
                  align="left"
                  scope="row"
                  sx={{
                    width: "10px",
                  }}
                >
                  <Image
                    src={row.image_small_url}
                    height="100px"
                    width="100px"
                    fit="scale-down"
                    duration={3000}
                    easing="cubic-bezier(0.7, 0, 0.6, 1)"
                    showLoading={true}
                    errorIcon={true}
                    shift={null}
                    distance="100px"
                    shiftDuration={900}
                    bgColor="inherit"
                  />
                </TableCell>
                <TableCell
                  align="left"
                  component="th"
                  scope="row"
                  sx={{
                    maxWidth: 200,
                  }}
                >
                  <Typography component="h3" sx={{ fontWeight: "bold" }}>
                    {row.product_name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: "light", textTransform: "capitalize" }}
                  >
                    {row.brands}
                  </Typography>
                </TableCell>
                <TableCell align="lef">{row.generic_name_fr}</TableCell>
                <TableCell
                  align="lef"
                  dangerouslySetInnerHTML={{
                    __html: row.ingredients_text_with_allergens_fr,
                  }}
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(Count / PageSize)}
        page={Page}
        onChange={(event, page) => {
          // console.log(y);
          setPage(page);
        }}
        sx={{
          margin: "30px auto",
          "& ul": {
            justifyContent: "center",
          },
        }}
      />
      <SingleFoodModal
        open={IsSingleFoodModalOpen}
        handleClose={() => {
          setIsSingleFoodModalOpen(false);
        }}
        foodID={SingleFoodID}
      />
    </div>
  );
};

export default FoodList;
