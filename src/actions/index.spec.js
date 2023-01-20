import { SUBSCRIBE_ISIN, UNSUBSCRIBE_ISIN, SET_MESSAGE } from "./types";
import { subscribeToIsin, unSubscribeToIsin, setMessage } from "./index";

describe("Actions", () => {
  describe("subscribeToIsin", () => {
    const action = subscribeToIsin("DE000BASF111", jest.fn());
    it("should return the correct type", () => {
      expect(action.type).toEqual(SUBSCRIBE_ISIN);
    });

    it("should return the correct payload", () => {
      expect(action.payload.data).toEqual("DE000BASF111");
    });
  });

  describe("unsubscribeToIsin", () => {
    const action = unSubscribeToIsin("DE000BASF111", jest.fn());
    it("should return the correct type", () => {
      expect(action.type).toEqual(UNSUBSCRIBE_ISIN);
    });

    it("should return the correct payload", () => {
      expect(action.payload.data).toEqual("DE000BASF111");
    });
  });

  describe("setMessage", () => {
    const mockMessage = {
      isin: "DE000BASF111",
      price: 11.316359370403822,
      bid: 11.306359370403822,
      ask: 11.326359370403821,
    };
    const action = setMessage(mockMessage);
    it("should return the correct type", () => {
      expect(action.type).toEqual(SET_MESSAGE);
    });

    it("should return the correct payload", () => {
      expect(action.payload.data).toEqual(mockMessage);
    });
  });
});
