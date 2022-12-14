export const GETFORMSESSIONSTORANGE = () => {
  const items = localStorage.getItem("cartProduct");
  if (items) {
    return JSON.parse(localStorage.getItem("cartProduct"));
  } else {
    return [];
  }
};
