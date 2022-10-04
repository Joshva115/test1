import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Footer from "./components/footer";
function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, [setUser]);
  return (
    <div className="App">
      <Header />
      <Container>
        <h3 class="text-left display-5 pt-4 pb-3">Contacts</h3>
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
      <Footer />
    </div>
  );
}

export default App;
