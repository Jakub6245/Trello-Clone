import React from "react";
import { ToDo } from "../../config/Reducers";
import { useDraggable } from "@dnd-kit/core";
import "../../styles/TrelloListChild.css";
interface ITrelloListChild {
  toDo: ToDo;
}

const TrelloListChild: React.FC<ITrelloListChild> = ({ toDo }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: toDo.id,
  });
  return (
    <div
      className="trello__list__child"
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px) `
          : "",
      }}
      {...listeners}
      {...attributes}
    >
      <p>{toDo.toDoName}</p>
    </div>
  );
};

export default TrelloListChild;
