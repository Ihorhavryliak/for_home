import React from "react";
import { Button } from "react-bootstrap";

type ButtonGeneralType = {
  onClick: () => void;
};

const ButtonGeneral = ({ onClick }: ButtonGeneralType) => {
  return (
    <Button
      onClick={onClick}
      className="min-w-360 border-5 max-w-360 w-100 h-345 border-green-100 bg-black-100 line-32 h-200 d-flex justify-content-center align-items-center"
    >
      <span className="text-200 color-green-100 h-32">+</span>
    </Button>
  );
};

export default ButtonGeneral;
