import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type ModalGeneralType = {
  show: boolean;
  setShow: (val: boolean) => void;
  children: JSX.Element;
  onChange: () => void;
  type: string;
};

const ModalGeneral = ({ show, setShow, children, onChange, type }: ModalGeneralType) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Create card</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onChange}>
          {type === "add" ? "Create" : "Edit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalGeneral;
