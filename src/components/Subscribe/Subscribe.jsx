import React, { useState, useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { subscribeToIsin } from "../../actions";
import { useSocketContext } from "../SocketContext";
import { Input, Button, Warpper } from "./styles";

/**
 * @function Subscribe
 *
 * Component to render input field and subscribe button
 */
const Subscribe = (props) => {
  const [value, setValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const { sendJsonMessage } = useSocketContext();

  const validateISIN = useMemo(
    () =>
      !!(
        value.length === 12 &&
        value.slice(0, 2).match(/^[A-Z]+$/) &&
        value.slice(2, 11).match(/^[0-9A-Z]+$/) &&
        value.slice(11, 12).match(/^[0-9]+$/)
      ),
    [value]
  );

  const handleSubscribe = useCallback(() => {
    if (!validateISIN) {
      setIsValidInput(false);
      return;
    }
    props.subscribeToIsin(value, sendJsonMessage);
    setValue("");
    setIsValidInput(true);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKeyDown = useCallback(
    (event) => {
      if (value && event.key === "Enter") {
        handleSubscribe();
      }
    },
    [value] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <Warpper data-testid={"subscribe"}>
      <Input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setIsValidInput(true);
        }}
        placeholder="Enter ISIN"
        onKeyDown={handleKeyDown}
        isInvalid={!isValidInput}
        aria-label="input"
        tabIndex="1"
      />
      <Button
        onClick={handleSubscribe}
        disabled={!value}
        aria-label="button"
      >
        Subscribe
      </Button>
    </Warpper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ subscribeToIsin }, dispatch);
};

export default connect(null, mapDispatchToProps)(Subscribe);
