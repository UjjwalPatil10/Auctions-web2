import * as Yup from "yup";


const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    midname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches("^[0-9]{10}$", "Only 10 digits allow")
      .required("Required"),
    faxNo: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers allowed")
      .required("Required"),
    companyName: Yup.string().required("Required"),
    addressInfo: Yup.object({
      city: Yup.string().required("Required"),
      zipcode: Yup.string().matches(/^[0-9]+$/, "Only numbers allowed").required("Required"),
      country: Yup.string().required("Required"),
      state: Yup.string().required("Required")
    }),
    email: Yup.string()
      .email("please enter valid email")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "please enter valid email"
      )
      .required("Required"),
    role: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
    referenceName: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  export default validationSchema;