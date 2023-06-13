import { IState } from "./Reducers";

export const addList = (state: IState, listName: string) => {
  return {
    ...state,
    list: [
      ...state.list,
      {
        id: state.list.length + 1,
        listName: listName,
        toDos: [],
        isAddToDoVisible: false,
      },
    ],
  };
};

export const addToDo = (state: IState, toDo: string, id: number) => {
  return {
    ...state,
    list: state.list.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          toDos: [
            ...list.toDos,
            {
              id: Math.floor(Math.random() * 100000),
              toDoName: toDo,
            },
          ],
        };
      }
      return list;
    }),
  };
};

export const removeToDo = (state: IState, toDoId: number, listId: number) => {
  //...
  return {
    ...state,
    list: state.list.filter((list) => {
      if (list.id === listId) {
        const index = list.toDos.findIndex((el) => el.id === toDoId);
        return {
          ...list,
          toDos: list.toDos.splice(index, 1),
        };
      }
      return list;
    }),
  };
};

export const showAndHideAddToDo = (state: IState, id: number) => {
  return {
    ...state,
    list: state.list.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          isAddToDoVisible: !list.isAddToDoVisible,
        };
      }
      return list;
    }),
  };
};

export const changeListName = (
  state: IState,
  newListName: string,
  id: number | null
) => {
  return {
    ...state,
    list: state.list.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          listName: newListName,
        };
      }
      return list;
    }),
  };
};

export const setCurrentListId = (state: IState, id: number | null) => {
  return {
    ...state,
    currentListId: id,
  };
};
