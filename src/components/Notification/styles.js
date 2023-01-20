import styled, { css } from "styled-components";

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  ${props =>
    props.isClose &&
    css`
      display: none;
    `};
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  margin-top: 65vh;
  max-width: 700px;
`;

const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-top: -20px;
  margin-right: -12px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #008CBA;
  border: none;
  border-radius: 0px;
  color: white;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 0px;
  cursor: pointer;
  font-family: auto;
`;

const ModalBody = styled.div`
  text-align: center;
`;

const Text = styled.p`
  color: #555555;
`;

export { Modal, ModalContent, Close, Button, ModalBody, Text };
