const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementByValue";
const initialState = {
  name: "Khoi",
  count: 0,
};

// increment là một action
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

export default counterReducer;
