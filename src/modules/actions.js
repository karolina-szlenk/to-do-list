import mapObjectToArray from "../helpers";

export const TODOS_ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  SHOW_ALL: "SHOW_ALL",
  SHOW_TODO: "SHOW_TODO",
  SHOW_DONE: "SHOW_DONE",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  SEARCH_TODO: "SEARCH_TODO",
  INIT_TODOS_SUCCESS: "INIT_TODOS_SUCCESS",
  INIT_TODOS_FROM_BASE: "INIT_TODOS_FROM_BASE",
  ADD_TODO_TO_BASE: "ADD_TODO_TO_BASE",
  REMOVE_TODO_FROM_BASE: "REMOVE_TODO_FROM_BASE",
  GET_DATA_LOADING: "GET_DATA_LOADING",
  GET_DATA_ERROR: "GET_DATA_ERROR",
  TOGGLE_TODO_TO_BASE: "TOGGLE_TODO_TO_BASE"
};

const API_URL = "https://jfdd14-ks-homework7.firebaseio.com/";
const jsonType = ".json";

export const filters = [
  TODOS_ACTION_TYPES.SHOW_ALL,
  TODOS_ACTION_TYPES.SHOW_TODO,
  TODOS_ACTION_TYPES.SHOW_DONE,
];

export const ACTION_ADD_TODO = (inputValue) => {
  return {
    type: TODOS_ACTION_TYPES.ADD_TODO,
    value: inputValue,
    id: Date.now(),
  };
};

export const ACTION_TOGGLE_TODO = (todo) => {
  return {
    type: TODOS_ACTION_TYPES.TOGGLE_TODO,
    todo: todo,
  };
};

export const ACTION_REMOVE_TODO = (todo) => {
  return {
    type: TODOS_ACTION_TYPES.REMOVE_TODO,
    todo: todo,
  };
};

export const ACTION_SET_VISIBILITY_FILTER = (filter) => {
  return {
    type: TODOS_ACTION_TYPES.SET_VISIBILITY_FILTER,
    filter: filter,
  };
};

export const ACTION_SEARCH_TODO = (inputValue) => {
  return {
    type: TODOS_ACTION_TYPES.SEARCH_TODO,
    value: inputValue,
  };
};

export const ACTION_INIT_TODOS_SUCCESS = (todos) => {
  return {
    type: TODOS_ACTION_TYPES.INIT_TODOS_SUCCESS,
    value: todos,
  };
};

export const ACTION_INIT_TODOS_FROM_BASE = () => {
  return (dispatch) => {
    // dispatch(ACTION_GET_DATA_LOADING());
    return fetch(API_URL + jsonType)
      .then((response) => response.json())
      .then((json) => {
        return dispatch(ACTION_INIT_TODOS_SUCCESS(mapObjectToArray(json)));
      })
      .catch((e) => dispatch(ACTION_GET_DATA_ERROR()));
  };
};

export const ACTION_ADD_TODO_TO_BASE = (inputValue) => {
  return (dispatch) => {
    const body = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    fetch(API_URL + jsonType, {
      method: "POST",
      body: JSON.stringify(body),
    })
    .then(() => dispatch(ACTION_INIT_TODOS_FROM_BASE()))
    .then(() => ACTION_ADD_TODO(inputValue))
  };
};

export const ACTION_REMOVE_TODO_FROM_BASE = (todo) => {
  return (dispatch) => {
    fetch(API_URL + todo.key + jsonType, {
      method: "DELETE",
    })
    .then(() => dispatch(ACTION_INIT_TODOS_FROM_BASE()))
  };
};

export const ACTION_GET_DATA_LOADING = () => {
  return {
    type: TODOS_ACTION_TYPES.GET_DATA_LOADING,
  };
};

export const ACTION_GET_DATA_ERROR = () => {
  return {
    type: TODOS_ACTION_TYPES.GET_DATA_ERROR,
  };
};

export const ACTION_TOGGLE_TODO_TO_BASE = (todo) => {
  return (dispatch) => {
    const body = {
      completed: todo.completed,
    };
    fetch(API_URL + todo.key + jsonType, {
      method: "PATCH",
      body: JSON.stringify(body),
    })
    .then(() => dispatch(ACTION_INIT_TODOS_FROM_BASE()))
  };
};