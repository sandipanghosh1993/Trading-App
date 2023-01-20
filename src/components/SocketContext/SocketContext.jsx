import React, { useState, useEffect, useContext } from "react";
import useWebSocket from "react-use-websocket";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setMessage } from "../../actions";

const socketUrl = "ws://159.89.15.214:8080/";

export const SocketContext = React.createContext({});

const SocketProvider = (props) => {
  const [notification, setNotification] = useState(false);
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl, {
    onClose: () => setNotification(true),
    shouldReconnect: () => true,
    reconnectAttempts: 10,
    reconnectInterval: 3000,
  });

  useEffect(() => {
    console.log(lastJsonMessage)
    props.setMessage(lastJsonMessage);
  }, [lastJsonMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SocketContext.Provider
      value={{ notification, setNotification, sendJsonMessage }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setMessage,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SocketProvider);

export const useSocketContext = () => useContext(SocketContext);
