import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function users() {
  return (
    <div>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.address.street}</th>
                <th>{user.phone}</th>
                <th>{user.company.name}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default users;
