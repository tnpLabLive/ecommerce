import { useContext } from "react";
import { userAuthContext } from "../context/authContext";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const { authData } = useContext(userAuthContext);
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 bg-light" style={{ height: "90vh" }}>
          Dashboard {authData?.data?.email}
          <div>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/dashboard/form-store")}
            >
              Add Store
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/dashboard/store")}
            >
              Store
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/dashboard/form-staff")}
            >
              Add Staff
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/dashboard/staff")}
            >
              Staff
            </button>
          </div>
        </div>
        <div className="col-sm-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
