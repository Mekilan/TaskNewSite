import Api from "./../api/common";
export const All_List = "All_List";

export const getAllProduct = (querystring) => async (dispatch) => {
    const response = await Api.post(querystring);
    dispatch({ type: All_List, payload: response.data.products });
  };

