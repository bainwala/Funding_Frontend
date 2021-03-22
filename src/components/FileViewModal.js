import Modal from 'react-bootstrap/Modal';
import Button from "@material-ui/core/Button";

export default function FileViewModal(props) {
  
  function stringCleanup(resource){
    let arrNeeded = ["source", "funding_name", "description", "amount", "contact_person", "web", "eligible", "deadline"]
    let prefinal = JSON.stringify(resource, arrNeeded, 2);
    prefinal = prefinal.split("}").join("")
    prefinal = prefinal.split("{").join("")
    prefinal = prefinal.split("\"").join("")
    let final = prefinal.split(",")
    return final;
  }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="py-2">
          <Modal.Title id="contained-modal-title-vcenter">
            Resource: {props.info.funding_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="mb-4">By: {props.info.source}</h4>
          <h5>Details:</h5>
          {(stringCleanup(props.info).map((e) =>
            <p>{e}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
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