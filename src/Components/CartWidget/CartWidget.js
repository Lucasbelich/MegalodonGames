import React from "react";
import { BsCart2 } from "react-icons/bs";
import "./CartWidget.css";
import { Button } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <Button variant="solid" size="md">
        <BsCart2 className="btnCart" />
        0
      </Button>
    </div>
  );
};

export default CartWidget;
