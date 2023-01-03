import React from "react";
import { useSelector } from "react-redux";
import "./Customers.css";
const Customers = () => {
  const { customers } = useSelector((state) => state.Reduder);

  return (
    <section className="Customers">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>customers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col customer--table">
            <table className="table border  table-striped">
              <thead>
                <tr>
                  <th>customer id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>order</th>
                  <th>phone</th>
                  <th> registered</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((elem, index) => {
                  return (
                    <tr key={elem._id}>
                      <td className="border">{elem._id}</td>
                      <td className="border">{elem.name}</td>
                      <td className="border">{elem.email}</td>
                      <td className="border">{elem.orders}</td>
                      <td className="border">{elem.phone}</td>
                      <td className="border">{elem.updatedAt}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th>customer id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>order</th>
                  <th>phone</th>
                  <th> registered</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
