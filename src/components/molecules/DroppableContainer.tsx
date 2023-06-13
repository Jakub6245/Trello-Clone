import { useDroppable } from "@dnd-kit/core";
import "../../styles/TrelloList.css";
interface IDroppableContainer {
  id: number;
  children: JSX.Element;
}

// styled components
const style = (isOver: boolean) => ({
  backgroundColor: isOver ? "lightgreen" : "lightskyblue",
});

const DroppableContainer: React.FC<IDroppableContainer> = ({
  id,
  children,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} style={style(isOver)} className="trello__list">
      {children}
    </div>
  );
};

export default DroppableContainer;
