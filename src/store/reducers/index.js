const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("add");
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
      break;

    default:
      return state;
      break;
  }
};

export default todos;
