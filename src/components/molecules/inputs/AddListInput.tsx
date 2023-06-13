import React, { useState } from "react";

import { actionCreators } from "../../../hooks/useBindActionToDispatch";

import "../../../styles/InputsStyles/AddListInput.css";

const AddListInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.length < 1) {
      return;
    }
    if (event.key === "Enter") {
      actionCreators.addList({ listName: inputValue });
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      className="add__list__input"
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Add list"
      onKeyPress={handleKeyPress}
    />
  );
};

export default AddListInput;
