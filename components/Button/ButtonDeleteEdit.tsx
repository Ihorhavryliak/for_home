import React from "react";
import IconDelete from "../Icon/IconDelete";
import { Button } from "react-bootstrap";
import IconEdit from "../Icon/IconEdit";

type ButtonDeleteEditType = {
  type: "edit" | "delete";
  onClick: () => void;
};

const ButtonDeleteEdit = ({ type = "edit", onClick }: ButtonDeleteEditType) => {
  const typeDelete = type === "delete";
  return (
    <Button
      onClick={onClick}
      className="bg-green-100 rounded-10 w-32 min-h-32 d-flex justify-content-center align-items-center border-green-100"
    >
      <div className="d-flex ">{typeDelete ? <IconDelete /> : <IconEdit />}</div>
    </Button>
  );
};

export default ButtonDeleteEdit;
