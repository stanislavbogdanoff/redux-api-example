const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
