import Modal from 'react-bootstrap/Modal';
import Button from "@material-ui/core/Button";

export default function FileViewModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Resource:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.info.funding_name}</h4>
          <p>{JSON.stringify(props.info, null, 2)}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }