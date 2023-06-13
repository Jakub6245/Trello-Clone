import React from "react";

import "./App.css";
import store from "./store/Store";
import TrelloClone from "./pages/TrelloClone";
import { Provider } from "react-redux/es/exports";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TrelloClone />
      </div>
    </Provider>
  );
}

export default App;
