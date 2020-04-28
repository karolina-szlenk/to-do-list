import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./modules/reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
