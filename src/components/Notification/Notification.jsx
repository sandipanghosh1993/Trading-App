import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useSocketContext } from "../SocketContext";
import { Modal, ModalContent, Close, Button, ModalBody, Text } from "./styles";

/**
 * @function Notification
 *
 * Component to render notification dialog
 */
const Notification = (props) => {
  const { notification, setNotification, sendJsonMessage } = useSocketContext();

  const handleClick = useCallback(() => {
    if (props.messages) {
      Object.keys(props.messages).forEach((isin) =>
        sendJsonMessage({ subscribe: isin })
      );
      setNotification(false);
    }
  }, [props.messages]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Modal isClose={!notification} data-testid={'notification'}>
      <ModalContent>
        <Close onClick={() => setNotification(false)}>&times;</Close>
        <ModalBody>
          <Text>
            Data is not up to date. Please press the Refresh button to get the
            latest data.
          </Text>
          <Button onClick={handleClick} aria-label="refresh">Refresh</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

export default connect(mapStateToProps)(Notification);
