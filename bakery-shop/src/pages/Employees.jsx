import { Button, Table } from "react-bootstrap";
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { isAlpha, isNumeric } from 'validator';
import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";


function Employees() {
  const [employees, setEmployees] = useState([]);
  const idRef = useRef(); // inputi luger: tema abil saan teada, mida kasutaja kirjutas
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  // TODO: Load data from backend service
  useEffect(() => sync(false), []);

  const sync = (forceSync = true) => {
    const storedEmployees = localStorage.getItem('employees');
    if (!storedEmployees || forceSync) {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(json => {
          // Store data in local storage
          localStorage.setItem('employees', JSON.stringify(json.data));
          // Update state
          setEmployees(json.data);
        });
    } else {
      setEmployees(JSON.parse(storedEmployees));
    }
  }

  const validateFields = () => {
    // TODO - Done: Add validations
    if (!isNumeric(idRef.current.value)) {
      toast.error('Incorrect ID');// toast error
      return false;
    }

    if (!isAlpha(firstNameRef.current.value)) {
      toast.error('Incorrect first name');
      return false;
    }

    if (!isAlpha(lastNameRef.current.value)) {
      toast.error('Incorrect last name');
      return false;
    }

    if (!isEmail(emailRef.current.value)) {
      toast.error('Incorrect email');
      return false;
    }

    if (!isURL(avatarRef.current.value)) {
      toast.error('Incorrect avatar URL');
      return false;
    }

    if (employees.find(employee => employee.id === Number(idRef.current.value))) {
      toast.error('Employee with this ID already exists!');
      return false;
    }

    return true;
  }

  const addNewEmployee = () => {
    if (!validateFields()) {
      return; // katkestab funktsiooni töö
    }

    const newEmployee = {
      id: Number(idRef.current.value),
      email: emailRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      avatar: avatarRef.current.value
    }
    // TODO - Done: Add an employee to the table
    employees.push(newEmployee)
    localStorage.setItem('employees', JSON.stringify(employees));
    setEmployees(employees.slice());
    toast.success("Employee added!");
  }
  // TODO: Delete an employee from the table
  const deleteEmployee = (index) => {
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    setEmployees(employees.slice());
    toast.success("Employee deleted!")

  }

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />

      <div className="container">
        <h2 className="mb-4">Employees</h2>
        <Table className="table table-hover table-bordered table-sortable">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Avatar</th>
              {/* <!-- TODO: Add a column for an avatar --> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            {employees.map((employee, index) =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.email}</td>
                <img className="avatar-image" src={employee.avatar} alt={`${employee.first_name}'s avatar`} />
                <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
              </tr>
            )}

            <tr className="input-row">
              <td><input ref={idRef} type="text" placeholder="ID" className="form-control" /></td>
              <td><input ref={firstNameRef} type="text" placeholder="First name" className="form-control" />
                <input ref={lastNameRef} type="text" placeholder="Last name" className="form-control" />
              </td>
              <td><input ref={emailRef} type="text" placeholder="Email" className="form-control" /></td>
              <td><input ref={avatarRef} type="text" placeholder="Avatar URL" className="form-control" /></td>
              <td><Button type="submit" variant="success" onClick={addNewEmployee}>Add employee</Button></td>
            </tr>
          </tbody>
        </Table>
        <td><Button type="submit" variant="success" onClick={sync}>Sync with API</Button></td>
      </div>

    </div>)
}

export default Employees;