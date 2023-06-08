import { useContext, useEffect } from "react";
import { userAuthContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const { authData, setAuthData } = useContext(userAuthContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!authData?.data?.email) {
      fetchUserData();
    }
    // eslint-disable-next-line
  }, []);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("/me");
      console.log('data:', data)
      
      setAuthData(data);
    } catch (error) {
      console.log('error:', error)
      // navigate("/");
      // alert(error.message);
    }
  };

  return <>{children}</>;
}

export default ProtectedRoute;
