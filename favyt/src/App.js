import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users').then(res => {
              setUserList(res.data.data);
    });
  }, []);

  return (
    <div className="container-fluid p-3">
      <h5 className="d-inline-block">GET request using axios with React Hooks</h5>
      <table class="table table-sm mt-3">
        <thead class="thead-dark">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </thead>
        <tbody>
          {userList.map(x => <tr>
            <td>{x.first_name}</td>
            <td>{x.last_name}</td>
            <td>{x.email}</td>
            <td><img src={x.avatar} width="50" height="50" /></td>
          </tr>)}
          {userList.length == 0 && <tr>
            <td className="text-center" colSpan="4">
              <b>No data found to display.</b>
            </td>
          </tr>}
        </tbody>
      </table>

    </div>
  );
}

export default App;