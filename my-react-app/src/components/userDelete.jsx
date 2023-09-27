import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function UserDelete(){
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.delete(
            "http://localhost:3001/delete/${id}",
          );
        } catch (error) {
          console.error("Cant delete User", error);
        }
      };
const alertElement = document.querySelector('.alert');

if (alertElement) {
  const closeButton = alertElement.querySelector('.btn-close');
  
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      alertElement.style.display = 'none';
    });
  }
}


    return(
        <div className="alert alert-warning alert-dismissible fade show d-flex justify-content-between align-items-center" role="alert">
            Delete Alert: Are you sure to delete this user? 
            <div>
                <a className="text-decoration-none text-danger me-3" onClick={handleSubmit}>Delete</a>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}

export default UserDelete