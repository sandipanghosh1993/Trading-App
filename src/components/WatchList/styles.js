import styled from "styled-components";

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  max-width: 700px;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  color: white;
  display: table-cell;
  width: 200px;
  min-width: 20px;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  color: white;
`;

const EmptyText = styled.div`
  color: #ccc;
  text-align: center;
  padding: 50px;
  font-weight: 500;
`;

export { Table, Td, Th, EmptyText };
