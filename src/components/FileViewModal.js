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
        <Modal.Header closeButton className="py-2 border border-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            Resource: {props.info.funding_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border border-dark">
          <h5 className="mb-4">Details:</h5>
          <h6 className="my-4"><b>By: </b>{props.info.source}</h6>
          <h6 className="my-4"><b>Name: </b>{props.info.funding_name}</h6>
          <h6 className="my-4"><b>Description: </b>{props.info.description}</h6>
          <h6 className="my-4"><b>Amount Provided: </b>{props.info.amount}</h6>
          <h6 className="my-4"><b>Contact Person: </b>{props.info.contact_person}</h6>
          <h6 className="my-4"><b>Website: </b>{props.info.web}</h6>
          <h6 className="my-4"><b>Who's eligible? </b>{props.info.eligible}</h6>
          <h6 className="mt-4"><b>Deadline: </b>11:59 pm on {props.info.deadline}</h6>
        </Modal.Body>
        <Modal.Footer className="border border-dark">
          <Button 
            variant="contained" 
            color="secondary"
            onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }