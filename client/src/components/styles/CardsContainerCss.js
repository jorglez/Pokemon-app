import styled from "styled-components"

export const CardsContainerCss = styled.section `
  padding: 20px;
  margin: 0 auto;

  & h1{
    color: black;
    font-size: 40px;
  }
`
export const CardsGridCss = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap:20px 30px;
`