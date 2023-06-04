import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid bg-primary text-light p-3">
      <div className="row">
        <div className="col-sm-4">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Ecom
          </button>
        </div>
        <div className="col-sm-4">
          <button className="btn btn-primary" onClick={() => navigate("/cart")}>
            Cart
          </button>
        </div>
        <div className="col-sm-4">
          <button className="btn btn-primary" onClick={() => navigate("/acc")}>
            Create Account/Signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
