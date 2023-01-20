import {
  SET_MESSAGE,
  SUBSCRIBE_ISIN,
  UNSUBSCRIBE_ISIN,
} from "../actions/types";

/**
 * Reducer to handle messages
 */
const messagesReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SET_MESSAGE:
      if (
        action.payload.data &&
        action.payload.data.isin !== "" &&
        newState[action.payload.data.isin] !== undefined
      ) {
        newState[action.payload.data.isin] = {
          ask: action.payload.data.ask,
          bid: action.payload.data.bid,
          price: action.payload.data.price,
        };
      }
      return newState;
    case SUBSCRIBE_ISIN:
      return {
        ...state,
        [action.payload.data]: {},
      };
    case UNSUBSCRIBE_ISIN:
      delete newState[action.payload.data];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
