

// import React, { useContext } from "react";
// // import Dialog from "@mui/material/Dialog";
// // import DialogTitle from "@mui/material/DialogTitle";
// // import DialogContent from "@mui/material/DialogContent";
// import UserContext from "./UserContext";
// import UserForm from "./UserForm";
// // import Modal from "react-modal"
// import Modal from "react-bootstrap/Modal";

// import "../components/addEditUser.css"
// import { Button } from "react-bootstrap";
// import AuctionView from "../components/AuctionView";
// const AuctionModalView = () => {
//   //Dialog is in material
//   // const { open, handleModalClose, operation } = useContext(UserContext);
//   const { show, handleClose, operation,view } = useContext(UserContext);
//   return (
  
//     <Modal
//       show={show}
//       onHide={handleClose}
//       className="modal-dialog modal-lg modal-sm modal-md  modal-xl"
//       dialogClassName="my-modal"
//       style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0,maxHeight: "100vh", overflowY: "auto",maxWidth:"100vw"}}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>
//           {view == "view" ? "View User" : "Add User"}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body >
//        <AuctionView/>
//       <UserForm/>
 
//         <div>


//         </div>
//       </Modal.Body>

//       {/* <Modal.Footer></Modal.Footer> */}
//     </Modal>
//   );
// };

// export default AuctionModalView ;
// -----------------------------------------------------------------------------------

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuctionView from './AuctionView';

function Example() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { show, handleClose, operation ,view} = useContext(UserContext);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AuctionView/>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
