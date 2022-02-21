import styled from 'styled-components';

export const InputStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 2rem;
  input {
    max-width: 50%;
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0 0 1px rgba(0, 0, 0.5);
    font-size: 1rem;
    &:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0.5);
    }
  }
`;
export const TableStyled = styled.div`
  width: 100%;
  table {
    width: 100%;
    max-height: 800px;
    overflow-y: auto;
    th,
    td {
      width: calc(100% / 4);
      text-align: left;
    }
    th {
      font-size: 1.5rem;
    }
  }
`;
