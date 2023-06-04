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
  }, [authData?.data?.email]);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("/me");
      setAuthData(data);
    } catch (error) {
      navigate("/");
      alert(error.message);
    }
  };

  return <>{children}</>;
}

export default ProtectedRoute;
