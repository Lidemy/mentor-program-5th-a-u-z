debugger;
const todos = [
  {
    id: 1,
    content: "123",
    isDone: true,
  },
  {
    id: 2,
    content: "456",
    isDone: false,
  },
];
const showType = "undo";
const filterTodos = todos.filter((todo) => {
  if (showType === "undo") {
    return todo.isDone === false;
  } else if (showType === "done") {
    return todo.isDone === true;
  } else {
    return todo;
  }
});
console.log(filterTodos);
