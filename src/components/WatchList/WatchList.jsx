import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { unSubscribeToIsin } from "../../actions";
import { useSocketContext } from "../SocketContext";
import { Table, Th, Td, EmptyText } from "./styles";
import { formatNumber } from "../../utils";

/**
 * @function WatchList
 *
 * Component to render watch list
 */
const WatchList = (props) => {
  const { sendJsonMessage } = useSocketContext();

  const handleClick = useCallback(
    (isin) => props.unSubscribeToIsin(isin, sendJsonMessage),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (Object.keys(props.messages).length === 0) {
    return <EmptyText data-testid={'watch_list_empty'}>Watch list is empty</EmptyText>;
  }

  return (
    <Table data-testid={'watch_list'}>
      <tbody>
        <tr>
          <Th>ISIN</Th>
          <Th>Ask</Th>
          <Th>Bid</Th>
          <Th>Price</Th>
        </tr>
        {Object.keys(props.messages).map((isin) => (
          <tr key={isin}>
            <Td>{isin}</Td>
            <Td>{formatNumber(props.messages[isin].ask)}</Td>
            <Td>{formatNumber(props.messages[isin].bid)}</Td>
            <Td>{formatNumber(props.messages[isin].price)}</Td>
            <Td>
              <input
                type="image"
                src={require("../../images/delete-2-16.png")}
                onClick={() => handleClick(isin)}
                alt="delete"
                tabIndex="2"
              />
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ unSubscribeToIsin }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
