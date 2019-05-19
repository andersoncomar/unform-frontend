import styled from 'styled-components';
import { Form, Input } from 'unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const FormUnForm = styled(Form)`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
`;

export const InputUnForm = styled(Input)`
  display: flex;
  margin: 0 5px 0 5px;
  /* display: flex;
  flex-direction: row;
  justify-items: flex-start;
  height: 55px;
  background: #fff;
  font-size: 12px;
  color: #444;
  border-radius: 3px; */
`;

export const ButtonSend = styled.button`
  padding: 0 20px;
  background: #63f5b0;
  color: #fff;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #52d89f;
  }
`;
