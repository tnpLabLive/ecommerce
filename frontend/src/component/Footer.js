import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
  return (
    <div className="bg-primary text-light p-4">
      <div className="row">
        <div className="col-sm-6">Ecom.com</div>
        <div className="col-sm-6">
          <button className="btn btn-primary" onClick={() => navigate("/bacc")}>
            Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
