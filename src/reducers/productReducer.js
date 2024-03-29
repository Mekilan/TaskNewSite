import { PRO_LIST } from "./../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case PRO_LIST:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};
