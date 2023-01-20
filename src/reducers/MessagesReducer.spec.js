import MessagesReducer from "./MessagesReducer";
import {
  SUBSCRIBE_ISIN,
  UNSUBSCRIBE_ISIN,
  SET_MESSAGE,
} from "../actions/types";

describe("Messages Reducer", () => {
  it("should handle action of unknown type", () => {
    expect(MessagesReducer(undefined, {})).toEqual({});
  });

  it("should handle action of type SET_MESSAGE", () => {
    const mockData = {
      data: {
        isin: "DE000BASF111",
        price: 11.316359370403822,
        bid: 11.306359370403822,
        ask: 11.326359370403821,
      },
    };
    const expectedData = {
      DE000BASF111: {
        price: 11.316359370403822,
        bid: 11.306359370403822,
        ask: 11.326359370403821,
      },
    };
    const action = { type: SET_MESSAGE, payload: mockData };
    expect(
      MessagesReducer(
        {
          DE000BASF111: {},
        },
        action
      )
    ).toEqual(expectedData);
  });

  it("should handle action of type SUBSCRIBE_ISIN", () => {
    const action = { type: SUBSCRIBE_ISIN, payload: { data: "DE000BASF111" } };
    expect(MessagesReducer({}, action)).toEqual({ DE000BASF111: {} });
  });

  it("should handle action of type UNSUBSCRIBE_ISIN", () => {
    const action = {
      type: UNSUBSCRIBE_ISIN,
      payload: { data: "DE000BASF111" },
    };
    expect(MessagesReducer({ DE000BASF111: {} }, action)).toEqual({});
  });
});
