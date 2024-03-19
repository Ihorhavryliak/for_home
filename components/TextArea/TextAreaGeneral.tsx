import { UseFormRegisterReturn } from "react-hook-form";
import { DataInputType } from "../Section/SectionCard/hooks/useFormData";
import Form from "react-bootstrap/Form";

type InputGeneralType = {
  item: DataInputType;
  error?: string;
  label?: string;
  type?: string;
  phone?: string;
  register: UseFormRegisterReturn;
  value: string;
  id: number;
};

const TextAreaGeneral = ({ error, label, type = "text", phone, register, value, id }: InputGeneralType) => {
  return (
    <div className="position-relative">
      <Form.Group className="mb-3" controlId={`floating_outlined ${id}`}>
        <Form.Label>{label && label}</Form.Label>
        <Form.Control as="textarea" type={type} {...register} rows={3} />
      </Form.Group>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default TextAreaGeneral;
