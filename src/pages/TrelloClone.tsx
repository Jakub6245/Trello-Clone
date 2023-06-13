import React from "react";
import AddListInput from "../components/molecules/inputs/AddListInput";
import ChangeNameInput from "../components/molecules/inputs/ChangeNameInput";
import TrelloList from "../components/organisms/TrelloList";

const TrelloClone = () => {
  return (
    <div>
      <TrelloList />
      <ChangeNameInput />
      <AddListInput />
    </div>
  );
};

export default TrelloClone;
