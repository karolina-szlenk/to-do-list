import { TODOS_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  todos: [],
  searchTodoByName: ""
};

export const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      return (state = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.value,
            completed: false,
          },
        ],
      });
    case TODOS_ACTION_TYPES.TOGGLE_TODO:
      const todosCopy = [...state.todos];
      todosCopy.map((todo) =>
        todo.id === action.id ? (todo.completed = !todo.completed) : null
      );
      return (state = {
        ...state,
        todos: todosCopy,
      });
    case TODOS_ACTION_TYPES.REMOVE_TODO:
      return (state = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      });
    case TODOS_ACTION_TYPES.SEARCH_TODO:
      return (state = {
        ...state,
        searchTodoByName: action.value,
      });
    default: {
      return state;
    }
  }
};

export const visibilityFilter = (
  state = { activeFilter: TODOS_ACTION_TYPES.SHOW_ALL },
  action
) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.SET_VISIBILITY_FILTER: {
      return {
        activeFilter: action.filter,
      };
    }
    default: {
      return state;
    }
  }
};


