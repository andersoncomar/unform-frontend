import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const ButtonRemove = styled.button`
  background: #ff0000;
  border-radius: 5px;
  color: white;
  padding: 4px 15px;
  cursor: pointer;
`;

export const ButtonCreate = styled(Link)`
  background: #4fae50;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  width: 120px;
`;

export const ButtonEdit = styled(Link)`
  background: #1c6ea4;
  border-radius: 5px;
  color: white;
  padding: 4px 15px;
`;

export const TableContainer = styled.table`
  border: 1px solid #1c6ea4;
  background-color: #eeeeee;
  width: 50%;
  text-align: left;
  border-collapse: collapse;

  th {
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
  }

  td {
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
  }

  tr {
    &:nth-child(even) {
      background: #d0e4f5;
    }
  }

  thead {
    background: #1c6ea4;
    background: -moz - linear - gradient(top, #5592bb 0%, #327cad 66%, #1c6ea4 100%);
    background: -webkit - linear - gradient(top, #5592bb 0%, #327cad 66%, #1c6ea4 100%);
    background: linear - gradient(to bottom, #5592bb 0%, #327cad 66%, #1c6ea4 100%);
    border-bottom: 2px solid #444444;

    th {
      font-size: 15px;
      font-weight: bold;
      color: #ffffff;
      border-left: 2px solid #d0e4f5;

      &:first-child {
        border-left: none;
      }
    }
  }

  tbody {
    td {
      font-size: 13px;
    }
  }
`;
