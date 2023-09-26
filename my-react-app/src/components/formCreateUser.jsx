import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [userData, setUserData] = useState({
    name: "",
    job: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/postUser/",
        userData
      );
      console.log(response.data);
      setUserData({
        name: "",
        job: "",
      });
    } catch (error) {
      console.error("Cant create User", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="card m-3 p-3">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job">Job: </label>
          <input
            type="text"
            className="form-control"
            id="job"
            name="job"
            value={userData.job}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
