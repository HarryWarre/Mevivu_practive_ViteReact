import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function UserDelete({ id }) {
  console.log(id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:3001/deleteUser/${id}`
      );
      console.log("delete success");
    } catch (error) {
      console.error("Cant delete User", error);
    }
  };
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseClick = () => {
    setShowAlert(!showAlert);
  };

  return showAlert ? (
    <div
      className="alert alert-warning alert-dismissible fade show d-flex justify-content-between align-items-center"
      role="alert">
      <strong>Delete Alert! Confirm delete user ? </strong>
      <div>
        <button
          type="button"
          className="btn btn-outline-danger me-3"
          onClick={handleSubmit}>
          Delete
        </button>
        <button
          type="button"
          className="btn-close mt-1"
          aria-label="Close"
          onClick={handleCloseClick} // Xử lý sự kiện khi click vào nút "x"
        ></button>
      </div>
    </div>
  ) : null;
}

export default UserDelete;
