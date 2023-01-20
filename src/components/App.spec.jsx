import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "../reducers";
import App from "./App";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

describe("App", () => {
  beforeEach(() => {
    render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    );
  });

  it("should render Notification component", () => {
    expect(screen.getByTestId("notification")).toBeInTheDocument();
  });

  it("should render Empty WatchList component", () => {
    expect(screen.getByTestId("watch_list_empty")).toBeInTheDocument();
  });

  it("should render Subscribe component", () => {
    expect(screen.getByTestId("subscribe")).toBeInTheDocument();
  });
});
