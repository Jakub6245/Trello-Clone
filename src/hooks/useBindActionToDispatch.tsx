import store from "../store/Store";
import { ListAction, ActionTypes } from "../config/Reducers";
import { TActionPayload } from "../config/Reducers";
import { Dispatch, AnyAction } from "redux";

type ActionCreator<T extends string, P> = (payload: P) => {
  type: T;
  payload: TActionPayload;
};

const bindActionsToDispatch = <T extends (...args: T[]) => AnyAction>(
  dispatch: Dispatch,
  actionFunction: T
): T => {
  return ((...args: Parameters<T>) => dispatch(actionFunction(...args))) as T;
};

const createActionCreators = <T extends Record<keyof T, string>>(
  actionTypes: T
): { [K in keyof T]: ActionCreator<T[K], any> } => {
  const actionCreators: { [K in keyof T]: ActionCreator<T[K], ActionTypes> } =
    {} as any;

  for (const type in actionTypes) {
    actionCreators[type] = bindActionsToDispatch(
      store.dispatch,
      (payload: any) => ({
        type: actionTypes[type],
        payload,
      })
    );
  }

  console.log(actionCreators);
  return actionCreators;
};

export const actionCreators = createActionCreators(ListAction);
