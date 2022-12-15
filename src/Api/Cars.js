import React, { useEffect, useState } from "react";

const Table = () => {
  return (
    <table className="table table-striped caption-top">
      <caption className="fs-4 fw-bold text-dark">Cars</caption>
      <Thead />
      <Tbody />
    </table>
  );
};

const Tbody = () => {
let [cars, setCars] = useState([]);

  const onDelete = (id) => {
      setCars(cars.filter((car) => { 
          return car.id !== id;
      }));
  }; 

  const addUser = car =>{
    setCars(curr=> [...curr, car]);
  }

  useEffect(() => {
    let headers = new Headers();

    var base64 = require("base-64");
    headers.append("Authorization", "Basic " + base64.encode("valera@gmail.com:valera")); 
    fetch("http://127.0.0.1:8080/cars", {
    //  fetch("https://api.randomuser.me/?nat=US&results=5", {
     headers: headers,
    })  
    // .then(response => response.json())
    // .then(response => response.results)
    // .then(results => results.map(person => ({ id: person.id.value, firstName: person.name.first, lastName: person.name.last, email: person.email })))
    // .then(cars => cars.forEach(user => addUser(user)));  

    .then(response => response.json())
    // .then(json => console.log(json))
    // .then(response => response.results)
    // .then(results => results.map(person => ({ id: person.id.value, brand: person.brand, model: person.model, year: person.year.value, drive: person.drive })))
    .then(cars => cars.forEach(car => addUser(car)));
}, []);

    console.log('cars', cars);

  return cars.length === 0
    ? null
    : (
    // <tbody>
    //   {cars.map((item) => (
    //       <tr key={item.id}>
    //         <td>{item.id}</td>
    //         <td>{item.name.firstName}</td>
    //         <td>{item.name.lastName}</td>
    //         <td>{item.email}</td>
    //       <td>
    //         <button className="btn btn-primary" onClick={() => onDelete(item.id)}>
    //           Delete
    //         </button>
    //       </td>
    //     </tr>
    //   ))}
    // </tbody>

    <tbody>
      {cars.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{item.year}</td>
            <td>{item.drive}</td>
          <td>
            <button className="btn btn-primary" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
      );
};

const Thead = () => {
  return (
    <thead>
      <tr>
        <th width="17%">Id</th>
        <th width="17%">Brand</th>
        <th width="17%">Model</th>
        <th width="17%">Year</th>
        <th width="17%">Drive</th>
        <th width="17%">Action</th>
      </tr>
    </thead>
//     <thead>
//       <tr>
//         <th width="17%">Id</th>
//         <th width="17%">First name</th>
//         <th width="17%">Last name</th>
//         <th width="17%">Email</th>
//         <th width="17%">Action</th>
//       </tr>
//     </thead>
  );
};

export default Table;