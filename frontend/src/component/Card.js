import React from "react";

function Card() {
  return (
    <div className="card mt-4" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary">Add cart</button>
      </div>
    </div>
  );
}

export default Card;
