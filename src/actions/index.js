import { SUBSCRIBE_ISIN, UNSUBSCRIBE_ISIN, SET_MESSAGE } from "./types";

/**
 * Action creator for subscription
 */
export const subscribeToIsin = (isin, sendJsonMessage) => {
  sendJsonMessage({ subscribe: isin });
  return {
    type: SUBSCRIBE_ISIN,
    payload: {
      data: isin,
    },
  };
};

/**
 * Action creator for unsubscription
 */
export const unSubscribeToIsin = (isin, sendJsonMessage) => {
  sendJsonMessage({ unsubscribe: isin });
  return {
    type: UNSUBSCRIBE_ISIN,
    payload: {
      data: isin,
    },
  };
};

/**
 * Action creator to set incoming messages from websocket
 */
export const setMessage = (lastJsonMessage) => {
  return {
    type: SET_MESSAGE,
    payload: {
      data: lastJsonMessage,
    },
  };
};
