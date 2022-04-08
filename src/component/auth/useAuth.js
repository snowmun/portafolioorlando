import { useContext } from "react";
import { authContext } from "./AuthProvider";

const useAuth=() => {
  const contextValue=useContext(authContext)
    return contextValue;
  }

  export default useAuth