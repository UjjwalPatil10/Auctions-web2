

import React, {useState, useContext, useEffect } from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import AuctionFormikControl from "../shared/AuctionFormikControl";
import axios from "axios";
import Modal from "react-modal";
import AuctionLoadAnimation from "../shared/AuctionLoadAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Checkbox } from "../../shared/FormCheckBox";
import { useNavigate } from "react-router-dom";
import { GridCloseIcon } from "@mui/x-data-grid";
import UserContext from "./UserContext";
import UserService from "./UserService";
import { Nav } from "react-bootstrap";
import "../components/auctionForm.css"
function UserForm() {

  const { open, operation, initialUser, handleClose, filteredRows, getData, setData } =
    useContext(UserContext);
  //   const [data, setData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Cleanup function to reset loading state when the component unmounts
    return () => {
      setLoading(false);
    };
  }, []);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const auctionInventory = [
    { key: "Please select", value: "auctioneer" },
    { key: "Certificate", value: "certificate" },
    { key: "Option #2", value: "#2" },
    { key: "Option #3", value: "#3" },
  ];

  const dropdownOptions = [
    { key: "Active", value: "active" },
    { key: "Option #2", value: "#2" },

    { key: "Option #3", value: "#3" },
  ];

  const selectOptions = [
    { key: "Please Select", value: "" },
    { key: "Certificate", value: "certificate" },
    { key: "Option #2", value: "2" },
    { key: "Option #3", value: "3" },
  ];

  const extendOptions = [
    { key: "Please Select", value: "select" },
    { key: "Minutes", value: "minutes" },
    { key: "Option #2", value: "2" },
    { key: "Option #3", value: "3" },
  ];

 

  const checkboxOptions = [
    { key: "bulkbids", value: "bulkbid" },
    { key: "proxybids", value: "proxybid" },
    { key: "popcornbids", value: "popcornbid" },


  ];


  // const checkboxOptions1 = [
  //   { key: "Hide Bulk Bid", value: "hide" },

  // ];
  // const checkboxOptions2 = [
  //   { key: " Allow Proxy Bid", value: "allow" },
  // ];
  // const checkboxOptions3 = [

  //   { key: "Allow PopCorn Bid", value: "popcorn" },
  // ];

  const viewsOptions = [
    { key: "View", value: "view" },
    { key: "Offline", value: "offline" },
    { key: "Online", value: "online" },
  ];

  const activeOptions = [
    { key: "active", value: "active" },
    { key: "Option #2", value: "#2" },
    { key: "Option #3", value: "#3" },
  ];

  //   const initialValues = {
  //     auctionName: "",
  //     auctionInventory: "",
  //     viewingDate: "",
  //     viewTime: "",
  //     startDate: "",
  //     startTime: "",
  //     endDate: "",
  //     endTime: "",
  //     defaultBid: "",
  //     auctionResult: "",
  //     extendDeadlineType: "",
  //     extendDeadlineValue: "",
  //     noofBid: "",
  //     auctionMode: "",
  //     recordStatus: "",
  //     description: "",
  //     checkboxOption: [],
  //     // bulkbid: "",
  //     // proxybid: "",
  //     // popcornbid: "",
  //   };

  const validationSchema = Yup.object({
    // userId: Yup.string().required("Required"),
    // firstName: Yup.string().required("Required"),

    // phoneNumber: Yup.string()
    //   .matches("^[0-9]{10}$", "Only 10 digits allow")
    //   .required("Required"),
    auctionName: Yup.string().required("Required"),
    auctionInventory: Yup.string().required("Required"),
    // viewingDate: Yup.string().required("Required"),
    viewingDate: Yup.date().required("Required").nullable(),
    viewTime: Yup.string().required("Required"),
    // viewTime: Yup.string()
    // .matches(/^(0[1-9]|1[0-2]):[0-5][0-9] [APMapm]{2}$/, 'Invalid time format (hh:mm A)')
    // .required('Required'),
  
    startDate: Yup.string().required("Required"),
    startTime: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    endTime: Yup.string().required("Required"),
    defaultBid: Yup.string().required("Required"),
    auctionResult: Yup.string().required("Required"),

    extendDeadlineType: Yup.string().required("Required"),
    extendDeadlineValue: Yup.string().required("Required"),
    noofBids: Yup.string().required("Required"),
    auctionMode: Yup.string().required("Required"),
    recordStatus: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    bulkbid: Yup.string().required("Required"),
    proxybid: Yup.string().required("Required"),
    popcornbid: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    // checkbox1:Yup.array().required("Required")
  });


  // const onSubmit = (values, submitProps) => {
  //   // setLoading(true); // Set loading to true when the form is submitted

  //   // "http://localhost:8080/api/v1/auction"
  //   console.log("Form Values:", values);
  //   setData(values);
  //   axios
  //     // .post("http://localhost:8080/api/v1/auction", { values })
  //     .post("http://localhost:4000/users", { values })
  //     .then((response) => {
  //       console.log("Response",response);
  //       if (response.status === 204) {
  //         console.log("success");
  //         toast.success("Successfully Saved", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       }
  //     })

  //     .catch((e) => {
  //       console.log("e:", e);
  //       toast.error("Something went wrong", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: true,
  //       });
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //       submitProps.setSubmitting(false);
  //     });
  // };

  //     update,add users logic

//   const handleUser = async (user) => {
//     console.log("Handle..", user);
//     console.log("User ID:", initialUser);
//     if (operation === "edit") {
//     try {
//         const userId = initialUser?.id
//         const response = await axios.put(`http://localhost:4000/auctions/${userId}`,user);
//         // const response = await UserService.updateUser(initialUser?.id, user);
//         // Note: Use initialUser?._id instead of undefined userId
//         console.log("Res:", response?.data);
//         handleClose();
//         setData((prevUsers) => {
//           const updatedUsers = prevUsers.map((u) =>
//             u.id === initialUser.id ? { ...u, ...user } : u
//           );
//           return updatedUsers;
//         });
//         alert("User Updated...");
//       } catch (err) {
//         console.error(err);
//         alert("User not Updated");
//       }
//     }
//     else {
//       // Existing code for creating a new user
// const formatedValues = {
//   ...user,
//   bulkbid:user.checkboxOption.includes("bulkbid") ? "yes" : "no",
//   proxybid:user.checkboxOption.includes("proxybid") ? "yes" : "no",
//   popcornbid:user.checkboxOption.includes("popcornbid") ? "yes" : "no"
// }
// console.log("values:",formatedValues)

// setData(formatedValues)

//       // UserService.createUser(formatedValues)

//          await  axios.post("http://localhost:4000/auctions",formatedValues)
//         .then((response) => {
//           handleClose();
//           console.log("datas:",response?.data)
//           getData();
//         //   alert("User Created Successfully");
//         toast.success("User Created Successfully")
//         })
//         .catch((err) => {
//           console.error(err);
//           alert("User not created...");
//         });
//     }
//   };

const handleUser = async (user) => {
  console.log("Handle..", user);
  console.log("User ID:", initialUser);

  try {
    if (operation === "edit") {
      const userId = initialUser?.id;
      const updatedUser = {
        ...user,
        bulkbid: user.checkboxOption.includes("bulkbid") ? "yes" : "no",
        proxybid: user.checkboxOption.includes("proxybid") ? "yes" : "no",
        popcornbid: user.checkboxOption.includes("popcornbid") ? "yes" : "no",
      };
      const response = await axios.put(`http://localhost:4000/auctions/${userId}`, updatedUser);
      console.log("updatedUser:",response?.data)

      const UpdatedUsers = response?.data
      // console.log("Res:", response?.data);
      // handleClose();

      // Assuming your UI is connected to the setData function, update it accordingly
      // setData(response?.data)
      setData((prevUsers) => {
        const updatedUsers = prevUsers.map((u) =>
          u.id === initialUser.id ? { ...u, ...user } : u
        );
        return updatedUsers;
      });

      alert("User Updated...");                                                                                                               
      handleClose()
    } else {
      // Existing code for creating a new user
      const formatedValues = {
        ...user,
        bulkbid: user.checkboxOption.includes("bulkbid") ? "yes" : "no",
        proxybid: user.checkboxOption.includes("proxybid") ? "yes" : "no",
        popcornbid: user.checkboxOption.includes("popcornbid") ? "yes" : "no",
      };
      console.log("values:", formatedValues);

      const response = await axios.post("http://localhost:4000/auctions", formatedValues);
      handleClose();

      // Assuming your UI is connected to the setData function, update it accordingly
      // setData((prevData) => [...prevData, response.data]);
      getData()

      toast.success("User Created Successfully");
    }
  } catch (err) {
    console.error(err);
    alert("Error occurred while handling the user.");
  }
};


// const handleUser = async (user) => {
//   console.log("Handle..", user);
//   console.log("User ID:", initialUser);

//   try {
//     // Set loading to true when the form is submitted
//     setLoading(true);

//     if (operation === "edit") {
//       const userId = initialUser?.id;
//       const updatedUser = {
//         ...user,
//         bulkbid: user.checkboxOption.includes("bulkbid") ? "yes" : "no",
//         proxybid: user.checkboxOption.includes("proxybid") ? "yes" : "no",
//         popcornbid: user.checkboxOption.includes("popcornbid") ? "yes" : "no",
//       };
//       const response = await axios.put(`http://localhost:4000/auctions/${userId}`, updatedUser);
//       console.log("updatedUser:", response?.data);
//       handleClose();
//       setData((prevUsers) => {
//         const updatedUsers = prevUsers.map((u) =>
//           u.id === initialUser.id ? { ...u, ...user } : u
//         );
//         return updatedUsers;
//       });
//       alert("User Updated...");
//     } else {
//       const formatedValues = {
//         ...user,
//         bulkbid: user.checkboxOption.includes("bulkbid") ? "yes" : "no",
//         proxybid: user.checkboxOption.includes("proxybid") ? "yes" : "no",
//         popcornbid: user.checkboxOption.includes("popcornbid") ? "yes" : "no",
//       };
//       console.log("values:", formatedValues);
//       const response = await axios.post("http://localhost:4000/auctions", formatedValues);
//       handleClose();
//       setData((prevData) => [...prevData, response.data]);
//       toast.success("User Created Successfully");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Error occurred while handling the user.");
//   } finally {
//     // Set loading to false after the form submission is complete
//     setLoading(false);
//   }
// };





// const handleUser = async (user) => {
//   console.log("Handle..", user);
//   console.log("User ID:", initialUser);

//   try {
//     if (operation === "edit") {
//       const userId = initialUser?.id;
//       const response = await axios.put(`http://localhost:4000/auctions/${userId}`, user);
//       console.log("Res:", response?.data);
//       handleClose();

//       // Assuming your UI is connected to the setData function, update it accordingly
//       setData((prevUsers) => {
//         const updatedUsers = prevUsers.map((u) =>
//           u.id === initialUser.id ? { ...u, ...user } : u
//         );
//         return updatedUsers;
//       });

//       alert("User Updated...");
//     } else {
//       // Existing code for creating a new user
//       const formatedValues = {
//         ...user,
//         bulkbid: user.checkboxOption.includes("bulkbid") ? "yes" : "no",
//         proxybid: user.checkboxOption.includes("proxybid") ? "yes" : "no",
//         popcornbid: user.checkboxOption.includes("popcornbid") ? "yes" : "no",
//       };
//       console.log("values:", formatedValues);

//       const response = await axios.post("http://localhost:4000/auctions", formatedValues);
//       handleClose();
      
//       // Assuming your UI is connected to the setData function, update it accordingly
//       setData((prevData) => [...prevData, response.data]);

//       toast.success("User Created Successfully");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Error occurred while handling the user.");
//   }
// };

// const formik = useFormik({
//   initialValues: initialUser,
//   validationSchema: validationSchema,
//   onSubmit: (data) => handleUser(data),
// });


  if (loading) {
    return <AuctionLoadAnimation />;
  }

  return (
    <>
      <Formik
        initialValues={initialUser}
        // validationSchema={validationSchema}
        // onSubmit={onSubmit}
        onSubmit={(data) => handleUser(data)}
      >
        {(formik) => {
          return (
            <div className="container-fluid mt-2 ">

              <Form className="" autoComplete="off">
            
                {/* 1st row  */}
                <div className="row mt-2">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2 form-control 
                        
                        ${isFocused ? "focused" : ""
                          }`}
                        control="input"
                        type="text"
                        label="Auction Name"
                        name="auctionName"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp mt-2 ${isFocused ? "focused" : ""
                          }`}
                        control="select"
                        type="text"
                        label="Auction Inventory"
                        name="auctionInventory"
                        options={selectOptions}
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control  mt-2 ${isFocused ? "focused" : ""
                          }`}
                        control="date"
                        type="text"
                        label="viewing date"
                        name="viewingDate"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                </div>
                <br />
                {/* 2nd row  */}
                <div className="row ">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="time"
                        type="text"
                        label="Viewing Time"
                        name="viewTime"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="date"
                        type="text"
                        label="Start Date"
                        name="startDate"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2 startTimeInp ${isFocused ? "focused" : ""
                          }`}
                        control="input"
                        type="text"
                        label="Start Time"
                        name="startTime"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                </div>
                <br />
                {/* 3rd row  */}
                <div className="row ">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="date"
                        type="text"
                        label="End Date"
                        name="endDate"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="input"
                        type="text"
                        label="End Time"
                        name="endTime"
                      />

                 
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="input"
                        type="text"
                        label="Default Bid Increment By"
                        name="defaultBid"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                </div>
                <br />

                {/* 4th row  */}
                <div className="row mt-4 ">
                  {/* <div className="col-md-4">
                                    <div className="form-group auction-result">
                                        <label for="aucresdate" className="form-control-label">Auction Result Date</label>
                                    </div>
                                </div> */}

                  <div className="col-md-4">
                    <div className="form-group "></div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"></div>
                  </div>
                </div>


                {/* input field  */}
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="date"
                        type="text"
                        label="Auction Result Date"
                        name="auctionResult"
                      />
                      {/* <input
                        type="text"
                        id="aucresdate"
                        className={`form-control auctionResult ${isFocused ? 'focused' : ''}`}
                        onFocus={handleFocus}
                        // onBlur={handleBlur}
                        required
                        style={{ border: "1px solid #ccc" }}
                    /> */}
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>

                  <div className="col-md-8 mt-4">
                    <div className="form-group">
                      <div className="row">

                        <div className="col">
                          <div className="checkbox">
                            <label for="checkbox1" className="form-check-label checbox">
                              <AuctionFormikControl
                                control="checkbox"
                                name="checkboxOption"
                                options={checkboxOptions}
                              />

                              {/* <span> Hide Bulk Bid</span> */}
                            </label>
                            {/* {formik.touched.checkbox1 &&
                                  formik.errors.checkbox1 && (
                                    <small
                                      style={{ color: "red", fontSize: "12px" }}
                                    >
                                      {formik.errors.checkbox1}
                                    </small>
                                  )} */}
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>

                <br />

                {/* 5th row  */}
                <div className="row ">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp mt-2 ${isFocused ? "focused" : ""
                          }`}
                        control="select"
                        type="text"
                        label="Extend Deadline within Type"
                        name="extendDeadlineType"
                        options={extendOptions}
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2  ${isFocused ? "focused" : ""
                          }`}
                        control="input"
                        type="text"
                        label="Extend Deadline within Value"
                        name="extendDeadlineValue"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auctionInp form-control mt-2 BidInp ${isFocused ? "focused" : ""
                          }`}
                        control="input"
                        type="text"
                        label="No of Times Bid Extend"
                        name="noofBids"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                </div>
                <br />
                {/* 6th row  */}

                <div className="row mt-4 ">
                  <div className="col-md-2">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`selectInp mt-3 ${isFocused ? "focused" : ""
                          }`}
                        control="select"
                        type="text"
                        label="Auction Mode"
                        name="auctionMode"
                        options={viewsOptions}
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`selectInp mt-3  ${isFocused ? "focused" : ""
                          }`}
                        control="select"
                        type="text"
                        label="Record Status"
                        name="recordStatus"
                        options={activeOptions}
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`desc form-control mt-3  ${isFocused ? "focused" : ""
                          }`}
                        control="textarea"
                        type="text"
                        label="Description"
                        name="description"
                      />
                      {/* {isFocused && (
                        <small style={{ color: "red",fontSize:"px" }}>Required</small>
                    )} */}
                    </div>
                  </div>
                </div>
                <br />
                <hr />

                <div className="row d-flex justify-content-center">

                  <div className="col-md-2 d-flex justify-content-between">

                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      disabled={formik.isSubmitting}
                    >
                      {/*loading ? <>Loading..</> : <></>*/}
                      {operation === "edit" ? "Update" : "Creates"}

                    </button>



                  </div>

                </div>
              </Form>

            </div>
            
          );
        }}
      </Formik>

      <div>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}
export default UserForm;