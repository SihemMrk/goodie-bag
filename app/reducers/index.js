const initialState = {
  candies: []
};
const MANAGE_CANDIES = "MANAGE_CANDIES";

const rootReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case MANAGE_CANDIES: {
      newState.candies.push({ candies: action.candies });
    }
    default:
      return state;
  }
};

export default rootReducer;
