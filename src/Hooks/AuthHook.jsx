import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AuthHook = () => {
   const data = useContext(AuthContext)
   return data;
};

export default AuthHook;