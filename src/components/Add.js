import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div id="add" className="mb-3 d-flex justify-content-end">
      <Link className="btn btn-success" to="/add">
        Add
      </Link>
    </div>
  );
};

export default Add;
