export const ADMINLOGINDATA = () => {
  const items = sessionStorage.getItem("adminId");
  if (items) {
    return JSON.parse(sessionStorage.getItem("adminId"));
  } else {
    return null;
  }
};
