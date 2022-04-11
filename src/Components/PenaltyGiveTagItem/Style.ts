import styled from 'styled-components';

export const Tag = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  /* padding: 0 1rem; */
  height: 2rem;
  border-radius: 1rem;
  border: 2px solid black;
  background-color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  /* padding: 0 20px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;