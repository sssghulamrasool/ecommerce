import React, { useEffect } from "react";
import { ADMINLOGINDATA } from "../utlis/AdminLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminPrivate = ({ Component }) => {
  const { admin } = useSelector((state) => state.Reduder);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = ADMINLOGINDATA();
    if (auth === null) {
      navigate("/admin/");
    } else if (auth !== null) {
      return <Component />;
    }
  }, []);
};

export default AdminPrivate;
