import { TODOS_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  todos: [],
  searchTodoByName: "",
  isLoading: false,
  isError: false,
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
        todo.key === action.todo.key ? (todo.completed = !todo.completed) : null
      );
      return (state = {
        ...state,
        todos: todosCopy,
      });
    case TODOS_ACTION_TYPES.REMOVE_TODO:
      return (state = {
        ...state,
        todos: state.todos.filter((todo) => todo.key !== action.todo.key),
      });
    case TODOS_ACTION_TYPES.SEARCH_TODO:
      return (state = {
        ...state,
        searchTodoByName: action.value,
      });
    case TODOS_ACTION_TYPES.INIT_TODOS_SUCCESS:
      return (state = {
        ...state,
        todos: action.value,
        isLoading: false,
        isError: false,
      });
    case TODOS_ACTION_TYPES.GET_DATA_LOADING:
      return (state = {
        ...state,
        isLoading: true,
        isError: false,
      });
    case TODOS_ACTION_TYPES.GET_DATA_ERROR:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
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
