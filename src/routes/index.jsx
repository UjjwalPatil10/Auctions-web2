import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import MasterUser from "../shared/MasterUser";
import Home from "../pages/Home";
import { UserGrid } from "../components/user_module/UserGrid";
import MasterEditForm from "../components/MasterEditForm";
import MasterTable from "../components/MasterTable";
import MasterAddForm from "../components/MasterAddForm";
import FormEditModal from "../components/user_module/FormEditModal";
import Header from "../components/Header"
import MasterModalForm from "../components/Modal/MasterModalForm";
import Details from "../components/Modal/Details";
import StockFile from "../components/Modal/StockFile";
import AddAuction from "../components/AddAuction";
import { useContext } from "react";
import UserContext from "../components/UserContext";
// import MasterEditForm from "../components/auction-module/MasterEditForm";

const Routes = () => {
  
    const { token } = useAuth();
    // Route configurations go here

    const routesForPublic = [
        {
            path: "/login",
            element: <Login />,
        },
        {

            path: "/user/register",
            element: <MasterUser />,
        },
        {
            path:"/masterEditForm",
            element: <MasterEditForm />
        },

        {
            path:"/masterTableForm",
            element: <MasterTable />
        },
        {
            path:"/addAuction",
            element: <AddAuction />
        },

        {
            path:"/masterAddForm",
            element: <MasterAddForm />
        },

        {
            path:"/userGrid",
            element: <UserGrid />
        },

        {
            path: "/formEditModal",
            element: <FormEditModal />
        },
        {
            path: "/home",
            element: <Home/>,
        }
        // {
        //     path: "/header",
        //     element: <Header/>,
        // }
        // {
        //     path: "/masterModalForm",
        //     element: <MasterModalForm/>,
        // },
        // {
        //     path: "/details",
        //     element: <Details/>,
        // },
        // {
        //     path: "/stockfile",
        //     element: <StockFile/>,
        // },
   

    ];

    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/products",
                    element: <div>Products </div>,
                },
                {
                    path: "/reports",
                    element: <div>Reports</div>,
                },
                {
                    path: "/logout",
                    element: <Logout />,
                },
                {
                    path: "/user/list",
                    element: <UserGrid />
                }

                            ],
        },
    ];

    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <div>Home Page</div>,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;