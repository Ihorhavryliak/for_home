import { UseFormRegisterReturn } from "react-hook-form";
import { DataInputType } from "../Section/SectionCard/hooks/useFormData";
import Form from "react-bootstrap/Form";

type InputGeneralType = {
  item: DataInputType;
  error?: string;
  label?: string;
  type?: string;
  register: UseFormRegisterReturn;
  value: string;
  id: number;
  disabled?: boolean;
};

const InputGeneral = ({ error, label, type = "text", register, value, id, disabled }: InputGeneralType) => {
  return (
    <div className="position-relative">
      <Form.Group className="mb-3" controlId={`floating_outlined ${id}`}>
        <Form.Label>{label && label}</Form.Label>
        <Form.Control value={value} disabled={disabled} type={type} {...register} />
      </Form.Group>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default InputGeneral;
