import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "../../reducers";
import Notification from "./Notification";

describe("Notification", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(reducers)}>
        <Notification />
      </Provider>
    );
  });

  it("should render correct text", () => {
    expect(
      screen.getByText(
        "Data is not up to date. Please press the Refresh button to get the latest data."
      )
    ).toBeInTheDocument();
  });

  it("should render Refresh button", () => {
    expect(screen.getByText("Refresh")).toBeInTheDocument();
  });
});
