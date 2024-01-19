// import React, { useContext } from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import UserContext from "./UserContext";
// import UserForm from "./UserForm";
// import Modal from "react-modal"
// import "../components/addEditUser.css"
// const AddEditUser = () => {
//   //Dialog is in material
//   const { open,handleModalClose, operation } = useContext(UserContext);
//   return (
//     <Dialog open={open} onClose={handleModalClose} className="css-bdhsul-MuiTypography-root-MuiDialogTitle-root" >
//       <DialogTitle>
//         {operation == "edit" ? "Edit User" : "Add User"}
//       </DialogTitle>
//       <DialogContent>
//         <UserForm />
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddEditUser;


// ----------------------------------------------------------------

import React, { useContext } from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
import UserContext from "./UserContext";
import UserForm from "./UserForm";
// import Modal from "react-modal"
import Modal from "react-bootstrap/Modal";

import "../components/addEditUser.css"
import { Button } from "react-bootstrap";
const AddEditUser = () => {
  //Dialog is in material
  // const { open, handleModalClose, operation } = useContext(UserContext);
  const { show, handleClose, operation } = useContext(UserContext);
  return (
    // <Dialog open={open} onClose={handleModalClose} className="css-bdhsul-MuiTypography-root-MuiDialogTitle-root" >
    //   <DialogTitle>
    //     {operation == "edit" ? "Edit User" : "Add User"}
    //   </DialogTitle>
    //   <DialogContent>
    //     <UserForm />
    //   </DialogContent>
    // </Dialog>

    // ===============================================
    <Modal
      show={show}
      onHide={handleClose}
      className="modal-dialog modal-lg modal-sm modal-md  modal-xl"
      dialogClassName="my-modal"
      style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0,maxHeight: "100vh", overflowY: "auto",maxWidth:"100vw"}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {operation == "edit" ? "Edit User" : "Add User"}

        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <UserForm />
        {/* <div className="yup">
          <NavLink to="/masterModalForm"

            className="border-0 bg-white text-black  text-decoration-none m-3 hover-effect" style={activeState} >


            Master
          </NavLink>
          <NavLink to="/details" className="border-0 bg-white text-black text-decoration-none m-3 hover-effect" style={activeState}  >
            Details
          </NavLink>
          <NavLink to="/stockfile" className="border-0 bg-white text-black text-decoration-none m-3 hover-effect" style={activeState} >
            Stock File Upload
          </NavLink>

        </div> */}
        <div>

          {/* <Routes>
            <Route path="/masterModalForm" element={<MasterModalForm />} />
            <Route path="/details" element={<Details />} />
            <Route path="/stockfile" element={<StockFile />} />
          </Routes> */}

        </div>
      </Modal.Body>

      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
};

export default AddEditUser;