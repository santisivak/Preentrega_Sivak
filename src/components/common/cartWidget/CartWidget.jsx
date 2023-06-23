import * as React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Badge>
    </div>
  );
};

export default CartWidget;
