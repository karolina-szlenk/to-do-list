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
};

const API_URL = "https://jfdd14-ks-homework7.firebaseio.com/.json";

export const filters = [
  TODOS_ACTION_TYPES.SHOW_ALL,
  TODOS_ACTION_TYPES.SHOW_TODO,
  TODOS_ACTION_TYPES.SHOW_DONE,
];

let nextToDoId = 0;

export const ACTION_ADD_TODO = (inputValue) => {
  return {
    type: TODOS_ACTION_TYPES.ADD_TODO,
    value: inputValue,
    id: nextToDoId++,
  };
};

export const ACTION_TOGGLE_TODO = (id) => {
  return {
    type: TODOS_ACTION_TYPES.TOGGLE_TODO,
    id: id,
  };
};

export const ACTION_REMOVE_TODO = (id) => {
  return {
    type: TODOS_ACTION_TYPES.REMOVE_TODO,
    id: id,
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
    return fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        return dispatch(ACTION_INIT_TODOS_SUCCESS(mapObjectToArray(json)));
      });
  };
};
