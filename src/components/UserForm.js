// react-modal

import React, { useContext } from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import AuctionFormikControl from "../shared/AuctionFormikControl";
import axios from "axios";
import Modal from "react-modal";
import "../components/masterAddForm.css";
import { useState } from "react";
import AuctionLoadAnimation from "../shared/AuctionLoadAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Checkbox } from "../../shared/FormCheckBox";
import { useNavigate } from "react-router-dom";
import { GridCloseIcon } from "@mui/x-data-grid";
import UserContext from "./UserContext";
import UserService from "./UserService";
function UserForm() {

    const {open,operation,  initialUser,    handleModalClose,filteredRows, getData, setData } =
    useContext(UserContext);
//   const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
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

  const dropdownOptionsForCountry = [
    { key: "Select a country", value: "" },
    { key: "Australia", value: "Australia" },
    { key: "Afghanistan", value: "Afghanistan" },
    { key: "Albania", value: "Albania" },
    { key: "Algeria", value: "Algeria" },
    { key: "Andorra", value: "Andorra" },
    { key: "Angola", value: "Angola" },
    { key: "Antigua and Barbuda", value: "Antigua and Barbuda" },
    { key: "Argentina", value: "Argentina" },
    { key: "Armenia", value: "Armenia" },
    { key: "Austria", value: "Austria" },
    { key: "Azerbaijan", value: "Azerbaijan" },
    { key: "Bahamas", value: "Bahamas" },
    { key: "Bahrain", value: "Bahrain" },
    { key: "Bangladesh", value: "Bangladesh" },
    { key: "Barbados", value: "Barbados" },
    { key: "Belarus", value: "Belarus" },
    { key: "Belgium", value: "Belgium" },
    { key: "Belize", value: "Belize" },
    { key: "Benin", value: "Benin" },
    { key: "Bhutan", value: "Bhutan" },
    { key: "Bolivia", value: "Bolivia" },
    { key: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
    { key: "Botswana", value: "Botswana" },
    { key: "Brazil", value: "Brazil" },
    { key: "Brunei", value: "Brunei" },
    { key: "Bulgaria", value: "Bulgaria" },
    { key: "Burkina Faso", value: "Burkina Faso" },
    { key: "Burundi", value: "Burundi" },
    { key: "Cabo Verde", value: "Cabo Verde" },
    { key: "Cambodia", value: "Cambodia" },
    { key: "Cameroon", value: "Cameroon" },
    { key: "Canada", value: "Canada" },
    { key: "Central African Republic", value: "Central African Republic" },
    { key: "Chad", value: "Chad" },
    { key: "Chile", value: "Chile" },
    { key: "China", value: "China" },
    { key: "Colombia", value: "Colombia" },
    { key: "Comoros", value: "Comoros" },
    {
      key: "Congo, Democratic Republic of the",
      value: "Congo, Democratic Republic of the",
    },
    { key: "Congo, Republic of the", value: "Congo, Republic of the" },
    { key: "Costa Rica", value: "Costa Rica" },
    { key: "Côte d’Ivoire", value: "Côte d’Ivoire" },
    { key: "Côte d’Ivoire", value: "Côte d’Ivoire" },
    { key: "Cuba", value: "Cuba" },
    { key: "Cyprus", value: "Cyprus" },
    { key: "Czech Republic", value: "Czech Republic" },
    { key: "Denmark", value: "Denmark" },
    { key: "Djibouti", value: "Djibouti" },
    { key: "Dominica", value: "Dominica" },
    { key: "Dominican Republic", value: "Dominican Republic" },
    { key: "East Timor (Timor-Leste)", value: "East Timor (Timor-Leste)" },
    { key: "Ecuador", value: "Ecuador" },
    { key: "Australia", value: "australia" },
    { key: "India", value: "india" },
    { key: "Japan", value: "japan" },
    { key: "Australia", value: "australia" },
    { key: "Egypt", value: "Egypt" },
    { key: "El Salvador", value: "El Salvador" },
    { key: "Equatorial Guinea", value: "Equatorial Guinea" },
    { key: "Eritrea", value: "Eritrea" },
    { key: "Estonia", value: "Estonia" },
    { key: "Eswatini", value: "Eswatini" },
    { key: "Ethiopia", value: "Ethiopia" },
    { key: "Fiji", value: "Fiji" },
    { key: "Finland", value: "Finland" },
    { key: "France", value: "France" },
    { key: "Gabon", value: "Gabon" },
    { key: "The Gambia", value: "The Gambia" },
    { key: "Georgia", value: "Georgia" },
    { key: "Germany", value: "Germany" },
    { key: "Ghana", value: "Ghana" },
    { key: "Greece", value: "Greece" },
    { key: "Grenada", value: "Grenada" },
    { key: "Guatemala", value: "Guatemala" },
    { key: "Guinea", value: "Guinea" },
    { key: "Guinea-Bissau", value: "Guinea-Bissau" },
    { key: "Guyana", value: "Guyana" },
    { key: "Haiti", value: "Haiti" },
    { key: "Honduras", value: "Honduras" },
    { key: "Hungary", value: "Hungary" },
    { key: "Iceland", value: "Iceland" },
    { key: "India", value: "India" },
    { key: "Indonesia", value: "Indonesia" },
    { key: "Iran", value: "Iran" },
    { key: "Iraq", value: "Iraq" },
    { key: "Ireland", value: "Ireland" },
    { key: "Israel", value: "Israel" },
    { key: "Italy", value: "Italy" },
    { key: "Jamaica", value: "Jamaica" },
    { key: "Japan", value: "Japan" },
    { key: "Jordan", value: "Jordan" },
    { key: "Kazakhstan", value: "Kazakhstan" },
    { key: "Kenya", value: "Kenya" },
    { key: "Kiribati", value: "Kiribati" },
    { key: "Korea, North", value: "Korea, North" },
    { key: "Korea, South", value: "Korea, South" },
    { key: "Kosovo", value: "Kosovo" },
    { key: "Kuwait", value: "Kuwait" },
    { key: "Kyrgyzstan", value: "Kyrgyzstan" },
    { key: "Laos", value: "Laos" },
    { key: "Latvia", value: "Latvia" },
    { key: "Lebanon", value: "Lebanon" },
    { key: "Lesotho", value: "Lesotho" },
    { key: "Liberia", value: "Liberia" },
    { key: "Libya", value: "Libya" },
    { key: "Liechtenstein", value: "Liechtenstein" },
    { key: "Lithuania", value: "Lithuania" },
    { key: "Luxembourg", value: "Luxembourg" },
    { key: "Madagascar", value: "Madagascar" },
    { key: "Malawi", value: "Malawi" },
    { key: "Malaysia", value: "Malaysia" },
    { key: "Maldives", value: "Maldives" },
    { key: "Mali", value: "Mali" },
    { key: "Malta", value: "Malta" },
    { key: "Marshall Islands", value: "Marshall Islands" },
    { key: "Mauritania", value: "Mauritania" },
    { key: "Mauritius", value: "Mauritius" },
    { key: "Mexico", value: "Mexico" },
    {
      key: "Micronesia, Federated States of",
      value: "Micronesia, Federated States of",
    },
    { key: "Moldova", value: "Moldova" },
    { key: "Monaco", value: "Monaco" },
    { key: "Mongolia", value: "Mongolia" },
    { key: "Montenegro", value: "Montenegro" },
    { key: "Morocco", value: "Morocco" },
    { key: "Mozambique", value: "Mozambique" },
    { key: "Myanmar (Burma)", value: "Myanmar (Burma)" },
    { key: "Namibia", value: "Namibia" },
    { key: "Nauru", value: "Nauru" },
    { key: "Nepal", value: "Nepal" },
    { key: "Netherlands", value: "Netherlands" },
    { key: "New Zealand", value: "New Zealand" },
    { key: "Nicaragua", value: "Nicaragua" },
    { key: "Niger", value: "Niger" },
    { key: "Nigeria", value: "Nigeria" },
    { key: "North Macedonia", value: "North Macedonia" },
    { key: "Norway", value: "Norway" },
    { key: "Oman", value: "Oman" },
    { key: "Pakistan", value: "Pakistan" },
    { key: "Palau", value: "Palau" },
    { key: "Panama", value: "Panama" },
    { key: "Papua New Guinea", value: "Papua New Guinea" },
    { key: "Paraguay", value: "Paraguay" },
    { key: "Peru", value: "Peru" },
    { key: "Philippines", value: "Philippines" },
    { key: "Poland", value: "Poland" },
    { key: "Portugal", value: "Portugal" },
    { key: "Qatar", value: "Qatar" },
    { key: "Romania", value: "Romania" },
    { key: "Russia", value: "Russia" },
    { key: "Rwanda", value: "Rwanda" },
    { key: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
    { key: "Saint Lucia", value: "Saint Lucia" },
    {
      key: "Saint Vincent and the Grenadines",
      value: "Saint Vincent and the Grenadines",
    },
    { key: "Samoa", value: "Samoa" },
    { key: "San Marino", value: "San Marino" },
    { key: "Sao Tome and Principe", value: "Sao Tome and Principe" },
    { key: "Saudi Arabia", value: "Saudi Arabia" },
    { key: "Senegal", value: "Senegal" },
    { key: "Serbia", value: "Serbia" },
    { key: "Seychelles", value: "Seychelles" },
    { key: "Sierra Leone", value: "Sierra Leone" },
    { key: "Singapore", value: "Singapore" },
    { key: "Slovakia", value: "Slovakia" },
    { key: "Slovenia", value: "Slovenia" },
    { key: "Solomon Islands", value: "Solomon Islands" },
    { key: "Somalia", value: "Somalia" },
    { key: "South Africa", value: "South Africa" },
    { key: "Spain", value: "Spain" },
    { key: "Sri Lanka", value: "Sri Lanka" },
    { key: "Sudan", value: "Sudan" },
    { key: "Sudan, South", value: "Sudan, South" },
    { key: "Suriname", value: "Suriname" },
    { key: "Sweden", value: "Sweden" },
    { key: "Switzerland", value: "Switzerland" },
    { key: "Syria", value: "Syria" },
    { key: "Taiwan", value: "Taiwan" },
    { key: "Tajikistan", value: "Tajikistan" },
    { key: "Tanzania", value: "Tanzania" },
    { key: "Thailand", value: "Thailand" },
    { key: "Togo", value: "Togo" },
    { key: "Tonga", value: "Tonga" },
    { key: "Trinidad and Tobago", value: "Trinidad and Tobago" },
    { key: "Tunisia", value: "Tunisia" },
    { key: "Turkey", value: "Turkey" },
    { key: "Turkmenistan", value: "Turkmenistan" },
    { key: "Tuvalu", value: "Tuvalu" },
    { key: "Uganda", value: "Uganda" },
    { key: "Ukraine", value: "Ukraine" },
    { key: "United Arab Emirates", value: "United Arab Emirates" },
    { key: "United Kingdom", value: "United Kingdom" },
    { key: "United States", value: "United States" },
    { key: "Uruguay", value: "Uruguay" },
    { key: "Uzbekistan", value: "Uzbekistan" },
    { key: "Vanuatu", value: "Vanuatu" },
    { key: "Vatican City", value: "Vatican City" },
    { key: "Venezuela", value: "Venezuela" },
    { key: "Vietnam", value: "Vietnam" },
    { key: "Yemen", value: "Yemen" },
    { key: "Zambia", value: "Zambia" },
    { key: "Zimbabwe", value: "Zimbabwe" },
  ];

  const checkboxOptions = [
    { key: "Hide Bulk Bid", value: "hide" },
    { key: " Allow Proxy Bid", value: "allow" },
    { key: "Allow PopCorn Bid", value: "popcorn" },

   
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
    viewingDate: Yup.string().required("Required"),
    viewTime: Yup.string().required("Required"),
    startDate: Yup.string().required("Required"),
    startTime: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    endTime: Yup.string().required("Required"),
    defaultBid: Yup.string().required("Required"),
    auctionResult: Yup.string().required("Required"),

    extendDeadlineType: Yup.string().required("Required"),
    extendDeadlineValue: Yup.string().required("Required"),
    noofBid: Yup.string().required("Required"),
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

const handleUser = async (user) => {
    console.log("Handle..", user);
    console.log("User ID:", initialUser);
    if (operation === "edit") 
    
    {
      try {
        const response = await UserService.updateUser(initialUser?._id, user);
        // Note: Use initialUser?._id instead of undefined userId
        console.log("Res:", response?.data);
        handleModalClose();
        setData((prevUsers) => {
          const updatedUsers = prevUsers.map((u) =>
            u._id === initialUser._id ? { ...u, ...user } : u
          );
          return updatedUsers;
        });
        alert("User Updated...");
      } catch (err) {
        console.error(err);
        alert("User not Updated");
      }
    }  
    else {
      // Existing code for creating a new user



      
      UserService.createUser(user)
     
    //  await  axios.post("http://localhost:4000/auctions",user)
        .then((response) => {
          handleModalClose();
          getData();
          alert("User Created Successfully");
        })
        .catch((err) => {
          console.error(err);
          alert("User not created...");
        });
    }
  };



  if (loading) {
    return <AuctionLoadAnimation />;
  }

  return (
    <>
      <Formik
        initialValues={initialUser}
        // validationSchema={validationSchema}
        // onSubmit={onSubmit}
        onSubmit={(data)=>handleUser(data)}
      >
        {(formik) => {
          return (
            <div className="container-fluid mt-2 ">
             
              <Form className="popAdjust" autoComplete="off">
                <div className="d-flex justify-content-end  p-2">
              <button
                    className="btn btn-outline-primary"
                    disabled={formik.isSubmitting}
                    // onClick={()=>navigate("/masterTableForm")}
                    onClick={handleModalClose}
                  >
                    {/*loading ? <>Loading..</> : <></>*/}
                    <GridCloseIcon/>
                  </button>
                  </div>
                {/* <div className="border border-3 border-primary h-90"></div>
                <h2 className="ml-10 fw-bold mb-2">User Registration</h2>
                <br></br>
                <p className="fw-bold mb-5 text-danger text-decoration-underline">
                  GENERAL INFO.
                </p> */}
                {/* 1st row  */}
                <div className="row mt-2 auctionName">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`auction-name nameInp form-control mt-2 form-control auctionResult ${
                          isFocused ? "focused" : ""
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
                        className={`select-inp input-group mt-2 ${
                          isFocused ? "focused" : ""
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
                        className={`form-control view-dateInp mt-2 ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
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
                <div className="row auctionName">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`form-control mt-2 viewTimeInp ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
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
                        className={`form-control mt-2 startDateInp ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
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
                        className={`form-control mt-2 startTimeInp ${
                          isFocused ? "focused" : ""
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
                <div className="row auctionName">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`form-control mt-2 endDateInp ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
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
                        className={`form-control mt-2 endDateInp ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
                        type="text"
                        label="End Time"
                        name="endTime"
                      />

                      {/* <AuctionFormikControl
                  className={`form-control mt-2 endTimeInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="End Time"
                    name="city1"
                  /> */}
                      {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`form-control mt-2 defaultIncrementInp ${
                          isFocused ? "focused" : ""
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
                <div className="row mt-4 auctionName">
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
                <div className="row mt-2 auctionName">
                  <div className="col-md-4">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`form-control mt-2 endDateInp ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
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
                            <label for="checkbox1" className="form-check-label">
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
                <div className="row auctionName">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`select-inp input-group mt-2 ${
                          isFocused ? "focused" : ""
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
                        className={`form-control mt-2 DeadlineInp ${
                          isFocused ? "focused" : ""
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
                        className={`form-control mt-2 BidInp ${
                          isFocused ? "focused" : ""
                        }`}
                        control="input"
                        type="text"
                        label="No of Times Bid Extend"
                        name="noofBid"
                      />
                      {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                    </div>
                  </div>
                </div>
                <br />
                {/* 6th row  */}

                <div className="row mt-4 auctionName">
                  <div className="col-md-2">
                    <div className="form-group">
                      <AuctionFormikControl
                        className={`mt-3 auction-mode ${
                          isFocused ? "focused" : ""
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
                        className={`mt-3 auction-mode ${
                          isFocused ? "focused" : ""
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
                        className={`form-control mt-3 des ${
                          isFocused ? "focused" : ""
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
        <ToastContainer />
      </div>
    </>
  );
}
export default UserForm;