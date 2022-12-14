import Moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import profile from "../../../assets/images/profile ung.webp";
import "./AdminUpdateProfile.css";
const AdminUpdateProfile = () => {
  const { id } = useParams();
  const { admin } = useSelector((state) => state.Reduder);

  return (
    <section className="AdminUpdateProfile">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div className="eidt-profile">
              <div className="edit-col">
                <div className="eidt-col-img">
                  <img src={admin.picture} alt="" className="img-fluid" />
                </div>
                <div className="eidt-col-detail">
                  <h5>Elizabeth Dyer</h5>
                  <p>
                    Member Since :{" "}
                    {Moment(admin.memberSince).format("DD-MM-YYYY")}
                  </p>
                  <button className="emailsend">
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                    E mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <div className="admin--edit--detail">
              <div className="card">
                <div className=" card-body">
                  <div className="media-heading">
                    <h5>
                      <strong>Personal Information</strong>
                    </h5>
                  </div>
                  <div className="table-responsive p-1">
                    <table className="table row table-borderless table">
                      <tbody className="col-lg-12 col-xl-6 p-0">
                        <tr>
                          <td>
                            <strong>Full Name :</strong> {admin.name}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Location :</strong> {admin.address}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Languages :</strong> English, German,
                            Spanish.
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="col-lg-12 col-xl-6 p-0">
                        <tr>
                          <td>
                            <strong>Website :</strong> abcdz.com
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Email :</strong>
                            {admin.email}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phone :</strong> {admin.phone}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row profie-img row">
                    <div className="col-md-12">
                      <div className="media-heading">
                        <h5>
                          <strong>Biography</strong>
                        </h5>
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus
                      </p>
                      <p className="mb-0">
                        because it is pleasure, but because those who do not
                        know how to pursue pleasure rationally encounter but
                        because those who do not know how to pursue consequences
                        that are extremely painful. Nor again is there anyone
                        who loves or pursues or desires to obtain pain of
                        itself, because it is pain, but because occasionally
                        circumstances occur in which toil and pain can procure
                        him some great pleasure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUpdateProfile;
