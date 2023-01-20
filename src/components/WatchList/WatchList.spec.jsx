import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise';
import WatchList from "./WatchList";
import { formatNumber } from "../../utils";

const mockData = {
  DE000BASF111: {
    price: 11.316359370403822,
    bid: 11.306359370403822,
    ask: 11.326359370403821,
  },
};

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

describe("WatchList", () => {
  beforeEach(() => {
    render(
      <Provider store={createStoreWithMiddleware(
        combineReducers({
          messages: () => {
            return mockData;
          }
        })
      )}>
        <WatchList />
      </Provider>
    );
  });

  it('should render Watch List', () => {
    expect(screen.getByTestId('watch_list')).toBeInTheDocument();
  });

  it('should render ISIN', () => {
    expect(screen.getByText(Object.keys(mockData)[0])).toBeInTheDocument();
  });

  it('should render price', () => {
    expect(screen.getByText(formatNumber(Object.values(mockData)[0].price))).toBeInTheDocument();
  });

  it('should render ask', () => {
    expect(screen.getByText(formatNumber(Object.values(mockData)[0].ask))).toBeInTheDocument();
  });

  it('should render bid', () => {
    expect(screen.getByText(formatNumber(Object.values(mockData)[0].bid))).toBeInTheDocument();
  });
});
