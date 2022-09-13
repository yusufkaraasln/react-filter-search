import React from "react";

function Table({data}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
       {
            data.map((item, index) => (
                <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </tr>
            ))
       }
      </tbody>
    </table>
  );
}

export default Table;
