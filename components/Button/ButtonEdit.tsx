import React from "react";
import { Button } from "react-bootstrap";
import IconDelete from "../Icon/IconDelete";

const ButtonEdit = () => {
  return (
    <Button className="bg-green-100 rounded-10 w-32 min-h-32 d-flex justify-content-center align-items-center">
      <IconDelete />
    </Button>
  );
};

export default ButtonEdit;
