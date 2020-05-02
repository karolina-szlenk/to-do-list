import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { todos, visibilityFilter  } from "./modules/reducer";

export default function configureStore(initialState) {
  return createStore(
    combineReducers({ todos, visibilityFilter }),
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
