import * as constants from "./constants";

/**
 * INITIAL STATE
 * of the Store Provider
 */

export const initialState = {
  count: 0,
  word: "",
  data: {
    status: "N/A",
    url: "N/A"
  }
};

/**
 * REDUCER
 * updates store via actions
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_COUNT:
      return { ...state, count: action.payload };
    case constants.SET_WORD:
      return { ...state, word: action.payload };
    case constants.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
