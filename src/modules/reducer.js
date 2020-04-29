import { TODOS_ACTION_TYPES } from './actions'

const INITIAL_STATE = {
    todos: [],
}

let reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      return state = {
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.value,
            completed: false, 
          },
        ],
      }
    default:
      return state;
  }
}

export default reducer;
