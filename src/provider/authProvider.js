import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken_] = useState(sessionStorage.getItem("jwt-token-storage"));

    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            sessionStorage.setItem('jwt-token-storage', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            sessionStorage.removeItem('jwt-token-storage')
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>
          {children}
        </AuthContext.Provider>
      );
};

export const useAuth = () => {
    return useContext(AuthContext);
  };

export default AuthProvider;