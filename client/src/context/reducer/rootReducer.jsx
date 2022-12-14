import { GETFORMSESSIONSTORANGE } from "../../utlis/GetLocalCart";
const initialState = {
  totalQuantity: 0,
  loadingProduct: false,
  menuSidebarToggle: true,
  allProduct: [],
  featureProducts: [],
  cartItemLocaltoRedux: [],
  admin: [],
  loadinAdminPanel: false,
};
export const Reduder = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        loadingProduct: true,
        allProduct: action.payload,
      };
    case "MENUSIDETOGGLE":
      return {
        ...state,
        menuSidebarToggle: !state.menuSidebarToggle,
      };
    case "GETFEATUREPRODUCT":
      return {
        ...state,
        featureProducts: action.payload,
      };
    case "CARTITEMFORMLOCAL":
      return {
        ...state,
        cartItemLocaltoRedux: action.payload,
      };
    case "ADMIN":
      return {
        ...state,
        loadinAdminPanel: true,
        admin: action.payload,
      };
    default:
      return state;
  }
};
