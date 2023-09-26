import React, { useEffect, useState } from "react";
import axios from "axios";
import AddButton from "./components/addButton";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/page/1")
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Lỗi trong quá trình lấy dữ liệu từ API:", error);
      });
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6">
            <div class="header">
              <h3>List User</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <div className="card m-3">
                <img src={user.avatar} alt="Avatar" />
                <div className="card-body">
                  <h5 className="card-title">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p className="card-text">
                    Email: {user.email} <br />
                    ID: {user.id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddButton />
    </>
  );
}

export default App;
