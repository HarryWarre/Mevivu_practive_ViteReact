import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import UserDelete from "./userDelete";

function UserDetails() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/user/${id}`)
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Lỗi trong quá trình lấy dữ liệu từ API:", error);
      });
  }, []);

  //Delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDeleteClick = () => {
    setSelectedUserId(id);
    setShowDeleteAlert(!showDeleteAlert);
  };
  return (
    <>
      {showDeleteAlert && <UserDelete id={selectedUserId} />}

      <div className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                <div className="card-body p-4 text-black">
                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-4 flex-grow-1">
                        {users.first_name} {users.last_name}
                      </h6>
                      <span>
                        <Link to={`/update/${id}`}>
                          <FontAwesomeIcon icon={faPen} />
                        </Link>
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="small mb-0">
                        <i className="far fa-clock me-2"></i>
                        {users.email}
                      </p>
                      <p className="fw-bold mb-0">ID: {users.id}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={users.avatar}
                        alt="Generic placeholder image"
                        className="img-fluid rounded-circle border border-dark border-3 img-avatar"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-rounded btn-sm m-1"
                          data-mdb-ripple-color="dark">
                          + Follow
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-rounded btn-sm m-1"
                          data-mdb-ripple-color="dark">
                          See profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link
                      to="/"
                      type="button"
                      className="btn btn-secondary btn-rounded btn-block btn-lg m-1">
                      Cancel
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-rounded btn-block btn-lg m-1"
                      onClick={handleDeleteClick}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
