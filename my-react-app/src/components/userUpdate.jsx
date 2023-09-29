import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/UpdateForm.scss";
function UserUpdate() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    job: "manager",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/updateUser/${id}`,
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Cant update User", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/user/${id}`)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Lỗi trong quá trình lấy dữ liệu từ API:", error);
      });
  }, []);

  return (
    <>
      <div className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                <div className="card-body p-4 text-black">
                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-4 flex-grow-1">
                        <p>Your name</p>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={userData.name}
                            placeholder={`${users.first_name} ${users.last_name}`}
                            onChange={handleChange}
                          />
                        </div>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="small mb-0">
                        <i className="far fa-clock me-2"></i>
                        {users.email}
                      </p>
                      <p className="fw-bold mb-0">ID: {users.id}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={users.avatar}
                          alt="Generic placeholder image"
                          className="img-fluid rounded-circle border border-dark border-3 img-avatar"
                        />
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <Link
                        to="/"
                        type="button"
                        className="btn btn-secondary btn-rounded btn-block btn-lg m-1">
                        Cancel
                      </Link>
                      <button
                        type="button"
                        className="btn btn-warning btn-rounded btn-block btn-lg m-1"
                        onClick={handleSubmit}>
                        Update
                      </button>
                    </div>
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

export default UserUpdate;
