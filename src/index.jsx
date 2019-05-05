import React from "react";
import ReactDOM from "react-dom";
// import App from './
import SearchPage from "./components/SearchPage";
import { createStore } from "redux";
import reducer from "./reducers/";

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  console.log(state);
  ReactDOM.render(
    <SearchPage
      history={history}
      location={location}
      place={state.place}
      onPlaceChange={place => store.dispatch({type:"CHANGE_PLACE",place})}
    />,
    document.querySelector(".container")
  );
};

render();
store.subscribe(render);