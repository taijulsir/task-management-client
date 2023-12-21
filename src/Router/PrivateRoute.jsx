import AuthHook from "../Hooks/AuthHook";


const PrivateRoute = ({children}) => {
    const {user,loading} = AuthHook()
    
   if(loading){
    return 
   }
};

export default PrivateRoute;