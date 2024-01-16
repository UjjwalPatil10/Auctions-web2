import { ToastContainer } from "react-toastify";
import MasterTable from "./components/MasterTable";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
// import MasterEditForm from "./components/MasterEditForm";
import { Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
<>
<AuthProvider>
      <Routes />

{/* <Route path="masterTableForm"  element ={<MasterTable/>}/> */}

     
    </AuthProvider>
    <ToastContainer position="top-center"/>
</>

  );
}

export default App;
