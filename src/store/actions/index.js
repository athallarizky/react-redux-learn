let nextTodo = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodo++,
  text: text
});
