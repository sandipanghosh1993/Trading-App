import styled, { css } from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #a9a9a9;
  border-radius: 0px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  max-width: 600px;
  outline: none;
  ${props =>
    props.isInvalid &&
    css`
      border-color: red;
    `};
`;

const Button = styled.button`
  background-color: #a9a9a9;
  border: none;
  border-radius: 0px;
  color: black;
  padding: 0px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 0px;
  cursor: pointer;
  font-family: auto;
`;

const Warpper = styled.div`
  display: flex;
  justify-content: center;
`;

export { Input, Button, Warpper };
