import { createStore, applyMiddleware } from "redux";
import { listReducer, localStorageKey } from "../config/Reducers";
import { Middleware } from "@reduxjs/toolkit";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);

  const state = store.getState();
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      ...state,
    })
  );
};

const store = createStore(listReducer, applyMiddleware(localStorageMiddleware));

export default store;

// localstorage in redux middleware
// logger in redux middleware
// redux devtools - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

// localStorageMiddleware.js

// dispatch(setCurrentListId(listNameId))

// higher order function
// const bindActionToDispatch = (dispatch, anyFunction) => {
//     // Pick, Omit, Enum, Arguments
//   return (...args: Arguments) => dispatch(anyFunction(...rest))
// }

// // Arguments

// const bindedSetCurrentListId = bindActionToDispatch(store.dispatch, setCurrentListId)

// bindedSetCurrentListId(1231231,123123,123)

// export const actions = bindActionsToDispatch(store.dispatch, {
//   setCurrentListId: (listNameId) =>  {
//     type: ListAction.setCurrentListId,
//     payload: { id: listNameId },
//   },
// });
