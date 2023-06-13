import React, { useState } from "react";
import { actionCreators } from "../../../hooks/useBindActionToDispatch";
import { useSelector } from "react-redux";
import { IState } from "../../../config/Reducers";
import "../../../styles/InputsStyles/ChangeNameInput.css";

const ChangeNameInput = () => {
  const [inputValue, setInputValue] = useState("");

  const currentListId = useSelector((state: IState) => state.currentListId);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.length < 1) {
      return;
    }
    if (event.key === "Enter" && (currentListId || currentListId === 0)) {
      actionCreators.changeListName({ newListName: inputValue });
      actionCreators.setCurrentListId({ id: null });
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const isNameSelected = currentListId || currentListId === 0;

  return (
    <div>
      {isNameSelected && (
        <div className="change__name__input__container">
          <input
            className="change__name__input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Change list name"
            onKeyPress={handleKeyPress}
          />
        </div>
      )}
    </div>
  );
};

export default ChangeNameInput;
