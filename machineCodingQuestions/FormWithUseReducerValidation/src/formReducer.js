import React from "react";
export const initialState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  touched: {},
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.name]: action.value, //dynamic
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: action.errors, //static we know the key name so no need to use []
      };
    case "SET_TOUCHED":
      return {
        ...state,
        touched: {
          [action.name]: true,
        },
      };
    case "RESET":
      return initialState; //when form is submitted and to clear the values
    default:
      break;
  }
};
