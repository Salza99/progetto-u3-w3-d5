const initialState = {
  content: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_VALUE":
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default myReducer;
