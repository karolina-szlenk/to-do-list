export const selectTodos = (state) => state.todos.todos;

export const selectTodosCompleted = (state) =>
  state.todos.todos.filter((todo) => todo.completed);

export const selectTodosIncompleted = (state) =>
  state.todos.todos.filter((todo) => !todo.completed);

export const selectVisibleTodos = (state) => {
  if (state.visibilityFilter.activeFilter === "SHOW_ALL") {
    return selectTodos(state);
  } else if (state.visibilityFilter.activeFilter === "SHOW_TODO") {
    return selectTodosIncompleted(state);
  } else {
    return selectTodosCompleted(state);
  }
};

export const selectSearchTodo = (state) => state.todos.searchTodoByName;

export const selectSearchTodoByName = (state) => state.todos.todos.filter(todo => 
  todo.title.toLowerCase().includes(state.todos.searchTodoByName.toLowerCase()))

export const selectTodosLoading = (state) => state.todos.isLoading;

export const selectTodosError = (state) => state.todos.isError;