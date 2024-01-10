import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuctionFormikControl from "../../shared/AuctionFormikControl";
import axios from "axios";
import "../../shared/MasterUser.css";
import { useState } from "react";
import AuctionLoadAnimation from "../../shared/AuctionLoadAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import PropTypes from 'prop-types';


Modal.setAppElement("#root");

function FormEditModal(props) {

  const [loading, setLoading] = useState(false);

  const options = [
    { key: "Auctioneer", value: "auctioneer" },
    { key: "Bidder", value: "bidder" },
    { key: "Both", value: "Both" },
  ];

  const dropdownOptions = [
    { key: "Select an Status", value: "" },
    { key: "Active", value: "active" },
    { key: "False", value: "false" },
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
    { key: "Cuba", value: "Cuba" },
    { key: "Cyprus", value: "Cyprus" },
    { key: "Czech Republic", value: "Czech Republic" },
    { key: "Denmark", value: "Denmark" },
    { key: "Djibouti", value: "Djibouti" },
    { key: "Dominica", value: "Dominica" },
    { key: "Dominican Republic", value: "Dominican Republic" },
    { key: "East Timor (Timor-Leste)", value: "East Timor (Timor-Leste)" },
    { key: "Ecuador", value: "Ecuador" },
    { key: "India", value: "india" },
    { key: "Japan", value: "japan" },
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

  const initialValues = {
    firstname: "",
    midname: "",
    lastname: "",
    email: "",
    companyName: "",
    username: "",
    password: "",
    referenceName: "",
    phoneNumber: "",
    faxNo: "",
    role: "",
    status: "",
    remark: "optional",
    addressInfo: {
      type: "self",
      houseNo: "flat on v - 889",
      city: "",
      zipcode: "",
      country: "",
      state: "",
    },
  };


  const updatedValue = {
    firstname: "",
    midname: "",
    lastname: "",
    email: "",
    companyName: "",
    username: "",
    password: "",
    referenceName: "",
    phoneNumber: "",
    faxNo: "",
    role: "",
    status: "",
    remark: "optional",
    addressInfo: {
      type: "self",
      houseNo: "flat on v - 889",
      city: "",
      zipcode: "",
      country: "",
      state: "",
    },
  };

  const validationSchema = Yup.object({
    userId: Yup.string().required("Required"),
    firstname: Yup.string().required("Required"),
    midname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches("^[0-9]{10}$", "Only 10 digits allowed")
      .required("Required"),
    faxNo: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers allowed")
      .required("Required"),
    companyName: Yup.string().required("Required"),
    addressInfo: Yup.object().shape({
      houseNo: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      zipcode: Yup.string().matches(/^[0-9]+$/, "Only numbers allowed").required("Required"),
      country: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
    }),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    role: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
    referenceName: Yup.string().required("Required"),
  });
  const handleSubmit = (values, submitProps) => {
    setLoading(true);
    const userId = props.userDetails?.userId; 
  
    axios
      .put(`http://localhost:8080/api/v1/user/update/${userId}`, {values})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: true,
        });
      })
      .finally(() => {
        setLoading(false);
        submitProps.setSubmitting(false);
      });
  };


  if (loading) {
    return <AuctionLoadAnimation />;
  }
  
  const handleClose = () => {
    if (typeof props.onClose === 'function') {
      props.onClose();
    } else {
      console.error("onClose is not a function");
    }
  };

  return (
    <>
      <Formik
        initialValues={
          props.data !== null ? props.data : initialValues
          
        }
       // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <div className="container-fluid">
              <Form autoComplete="off">
                <h2 className="d-flex justify-content-center ml-10 fw-bold mb-2">
                  Update User Info..
                </h2>
                <div className="close-icon" onClick={handleClose}>
                  X
                </div>
                <br></br>

                <div className="row">
                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="First Name"
                    name="firstname"
                  />

                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Mid Name"
                    name="midname"
                  />

                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Last Name"
                    name="lastname"
                  />
                </div>
                <br />
                <div className="row">
                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Phone Number"
                    name="phoneNumber"
                  />

                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Fax No."
                    name="faxNo"
                  />

                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Zip Code"
                    name="addressInfo.zipcode"
                  />
                </div>
                <br />
                <div className="row">
                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="City"
                    name="addressInfo.city"
                  />

                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="State"
                    name="addressInfo.state"
                  />

                  <AuctionFormikControl
                    control="select"
                    label="Country"
                    name="addressInfo.country"
                    options={dropdownOptionsForCountry}
                  />
                </div>
                <br />
                <div className="row">
                  <AuctionFormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />

                  {/* <AuctionFormikControl
                    control="input"
                    type="text"
                    label="User Name"
                    name="username"
                  />

                  <AuctionFormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                  /> */}
                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Company Name"
                    name="companyName"
                  />
                  <AuctionFormikControl
                    control="input"
                    type="text"
                    label="Reference Name"
                    name="referenceName"
                  />
                </div>
                <br />
                <div className="row">
                  <AuctionFormikControl
                    control="radio"
                    label="Role"
                    name="role"
                    options={options}
                  />

                  <AuctionFormikControl
                    control="select"
                    label="Status"
                    name="status"
                    options={dropdownOptions}
                  />
                </div>
                <br></br>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={formik.isSubmitting}
                  >
                    {/*loading ? <>Loading..</> : <></>*/}
                    Save Changes
                  </button>
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

FormEditModal.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};
export default FormEditModal;
