import styled from "styled-components";

export const PaginationCss = styled.div`
display: flex;
  margin: auto;
  width: 400px;
  justify-content: space-around;
`

export const PButtonCss = styled.button`
  padding: 20px 23px;
  margin: 20px 0;
  border: none;
  border-radius: 40px;
  background-color: rgba(44,153,83,1);
  color: white;

  &:hover{
    cursor: pointer;
  }
`