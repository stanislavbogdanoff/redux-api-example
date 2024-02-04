const colorReducer = (state = "red", action) => {
  switch (action.type) {
    case "RED":
      return (state = "red");
    case "BLUE":
      return (state = "blue");
    default:
      return state;
  }
};

export default colorReducer;
