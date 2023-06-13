import {
  addList,
  addToDo,
  showAndHideAddToDo,
  changeListName,
  setCurrentListId,
  removeToDo,
} from "./Actions";

export interface IState {
  list: {
    id: number;
    listName: string;
    toDos: ToDo[];
    isAddToDoVisible: boolean;
  }[];
  currentListId: number | null;
}

export type TList = {
  id: number;
  listName: string;
  toDos: ToDo[];
  isAddToDoVisible: boolean;
};

export const localStorageKey = "state";

const data = localStorage.getItem(localStorageKey);
const InitialState = (data && JSON.parse(data)) || {
  list: [],
  currentListId: null,
};

export type ToDo = { id: number; toDoName: string };

export type ActionTypes =
  | { type: ListAction.addList; payload: { listName: string } }
  | { type: ListAction.addTask; payload: { toDo: string; id: number } }
  | { type: ListAction.showAndHideAddToDo; payload: { id: number } }
  | {
      type: ListAction.changeListName;
      payload: { newListName: string };
    }
  | { type: ListAction.setCurrentListId; payload: { id: number } }
  | {
      type: ListAction.removeTask;
      payload: { toDoId: number; listId: number };
    };

export enum ListAction {
  addList = "ADD_LIST",
  addTask = "ADD_TASK",
  removeTask = "REMOVE_TASK",
  showAndHideAddToDo = "SHOW_ADDTODO",
  changeListName = "CHANGE_LISTNAME",
  setCurrentListId = "SET_CURRENT_LIST_ID",
}

export type TActionPayload =
  | { listName: string }
  | { toDo: string; id: number }
  | { id: number }
  | { newListName: string }
  | { toDoId: number; listId: number };

export const listReducer = (
  state: IState = InitialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case ListAction.addList:
      return addList(state, action.payload.listName);
    case ListAction.addTask:
      return addToDo(state, action.payload.toDo, action.payload.id);
    case ListAction.showAndHideAddToDo:
      return showAndHideAddToDo(state, action.payload.id);
    case ListAction.changeListName:
      return changeListName(
        state,
        action.payload.newListName,
        state.currentListId
      );

    case ListAction.setCurrentListId:
      return setCurrentListId(state, action.payload.id);
    case ListAction.removeTask:
      return removeToDo(state, action.payload.toDoId, action.payload.listId);
    default:
      return state;
  }
};
