import { useContext } from "react";
import { userAuthContext } from "../context/authContext";

function Dashboard() {
  const { authData } = useContext(userAuthContext);
  return <div>Dashboard {authData?.data?.email}</div>;
}

export default Dashboard;
