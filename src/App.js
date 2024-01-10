import MasterTable from "./components/MasterTable";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
// import MasterEditForm from "./components/MasterEditForm";
import { Route } from "react-router-dom";


function App() {
  return (

    <AuthProvider>
      <Routes />

{/* <Route path="masterTableForm"  element ={<MasterTable/>}/> */}

     
    </AuthProvider>
  );
}

export default App;
