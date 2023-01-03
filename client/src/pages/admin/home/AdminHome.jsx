import React from "react";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { admin } = useSelector((state) => state.Reduder);

  return (
    <section className="admin--home">
      <h4 className="welcome--admin">
        Wellcome to <span> </span>
        {/* Wellcome to <span> {admin[0].name}</span> */}
      </h4>
    </section>
  );
};

export default AdminHome;
