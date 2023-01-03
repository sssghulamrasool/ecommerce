const initialState = {
  totalQuantity: 0,
  loadingProduct: false,
  menuSidebarToggle: true,
  allProduct: [],
  featureProducts: [],
  cartItemLocaltoRedux: [],
  admin: null,
  loadinAdminPanel: false,
  clientCreditional: null,
  checkout: [],
  orders: [],
  customers: [],
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

    case "CLIENT":
      return {
        ...state,
        loadingProduct: true,
        clientCreditional: action.payload,
      };
    case "CHECKOUT":
      return {
        ...state,
        checkout: action.payload,
      };

    case "ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "CUSTOMERS":
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};
