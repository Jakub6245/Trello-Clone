import React, { useState } from "react";

import { actionCreators } from "../../../hooks/useBindActionToDispatch";

import "../../../styles/InputsStyles/AddToDoInput.css";

interface IAddToInput {
  listId: number;
}

const AddToDoInput: React.FC<IAddToInput> = ({ listId }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.length < 1) {
      return;
    }
    if (event.key === "Enter") {
      actionCreators.addTask({ toDo: inputValue, id: listId });
      actionCreators.showAndHideAddToDo({ id: listId });
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        className="add__todo__input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add todo"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default AddToDoInput;
