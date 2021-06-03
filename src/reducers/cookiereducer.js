import { All_List } from "./../actions/cookieaction";

export default (state = {}, action) => {
  switch (action.type) {
    case All_List:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};
