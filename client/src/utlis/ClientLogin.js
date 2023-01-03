export const CLIENTLOGINDATA = () => {
  const items = sessionStorage.getItem("client");
  if (items) {
    return JSON.parse(sessionStorage.getItem("client"));
  } else {
    return null;
  }
};
