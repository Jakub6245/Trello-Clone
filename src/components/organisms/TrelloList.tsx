import React from "react";
import { useSelector } from "react-redux";
import { IState, TList } from "../../config/Reducers";
import AddToDoInput from "../molecules/inputs/AddToDoInput";
import TrelloListChild from "../molecules/TrelloListChild";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import DroppableContainer from "../molecules/DroppableContainer";
import { actionCreators } from "../../hooks/useBindActionToDispatch";
import "../../styles/TrelloList.css";
import "../../styles/TrelloCloneOverlay.css";

const searchStartingList = (list: TList[], todoId: number) => {
  return list.find((el) => el.toDos.find((el) => el.id === todoId));
};

const handleDragEnd = (event: DragEndEvent, list: IState["list"]) => {
  const { active, over } = event;

  const startingList = searchStartingList(list, Number(active.id));

  if (over?.id) {
    actionCreators.addTask({
      toDo: startingList?.toDos.find((el) => el.id === Number(active.id))
        ?.toDoName,
      id: Number(over.id),
    });
    actionCreators.removeTask({
      toDoId: startingList?.toDos.find((el) => el.id === Number(active.id))?.id,
      listId: startingList?.id,
    });
  }
};

const handleClick = (listNameId: number) => {
  actionCreators.setCurrentListId({ id: listNameId });
};

const TrelloList = () => {
  const list = useSelector((state: IState) => state.list);
  const currentListId = useSelector((state: IState) => state.currentListId);

  return (
    <div className="trello__list__container">
      {currentListId && <div className="trello__clone__overlay"></div>}
      <DndContext onDragEnd={(e) => handleDragEnd(e, list)}>
        {list.map((l, i) => {
          return (
            <DroppableContainer key={i} id={i + 1}>
              <div key={i} className="trello__list">
                <h2
                  className="trello__list__name"
                  onClick={() => handleClick(l.id)}
                >
                  {l.listName}
                </h2>

                {l.toDos &&
                  l.toDos.map((el, i) => <TrelloListChild key={i} toDo={el} />)}

                <button
                  className="trello__list__button"
                  onClick={() =>
                    actionCreators.showAndHideAddToDo({ id: l.id })
                  }
                >
                  Add todo
                </button>
                {l.isAddToDoVisible && <AddToDoInput listId={l.id} />}
              </div>
            </DroppableContainer>
          );
        })}
      </DndContext>
    </div>
  );
};

export default TrelloList;
