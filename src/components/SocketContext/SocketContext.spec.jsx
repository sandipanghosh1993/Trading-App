import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "../../reducers";
import SocketProvider from "./SocketContext";

const TestingComponent = () => {
  return <p>Mock Component</p>;
};

describe("SocketProvider", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={createStore(reducers)}>
          <SocketProvider>
            <TestingComponent />
          </SocketProvider>
        </Provider>
      )
    );
  });

  it("should render children", () => {
    expect(screen.getByText("Mock Component")).toBeInTheDocument();
  });
});
