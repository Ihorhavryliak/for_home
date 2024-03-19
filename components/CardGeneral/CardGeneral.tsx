import { CardText, CardTitle, Card, Button } from "react-bootstrap";
import ButtonDeleteEdit from "../Button/ButtonDeleteEdit";

type CardGeneralType = {
  title: string;
  description: string;
  onDelete: () => void;
  onEdit: () => void;
};

const CardGeneral = ({ title, description, onEdit, onDelete }: CardGeneralType) => {
  return (
    <Card className="shadow-1 bg-gray-200 pt-35 pb-35 pl-35 pt-27 rounded-10 max-w-360 w-100 h-200 card-hover">
      <CardTitle className="color-green-100 text-27 line-117 font-bolt pr-67">{title}</CardTitle>
      <CardText className="text-white text-16 line-125 pr-44 text-cut-3 mb-0">{description}</CardText>
      <div className="position-absolute end-0 top-0 card-hover-button invisible">
        <ButtonDeleteEdit onClick={onDelete} type="delete" />
      </div>
      <div className="position-absolute end-0 bottom-0 card-hover-button invisible">
        <ButtonDeleteEdit onClick={onEdit} type="edit" />
      </div>
    </Card>
  );
};

export default CardGeneral;
