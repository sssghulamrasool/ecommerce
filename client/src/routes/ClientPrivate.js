import { Navigate, Outlet } from "react-router-dom";

const ClientPrivate = () => {
  //   const Navigate = useNavigate();
  //   const auth = JSON.parse(sessionStorage.getItem("userId"));

  const auth = sessionStorage.getItem("userId");
  // console.log(auth ? "OK" : "NO");
  // return auth ? (
  //   <Outlet />
  // ) : (
  //   <>
  //     <Navigate to="/create-account" />
  //   </>
  //);
  return;
};

export default ClientPrivate;
