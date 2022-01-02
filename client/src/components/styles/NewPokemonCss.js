import styled from "styled-components";
import { interfaceColors, typeColors } from "./GlobalColors";


const {primary, secondary} = interfaceColors

export const NewPokemonCss = styled.form `
  margin: auto;
  width: 600px;
  background-color: ${primary};
  border-radius: 10px;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
  z-index: 1;

  & h2{
    display: block;
    padding: 20px 20px 10px 20px;
    background-color: ${secondary};

    &.error{
      background-color: ${typeColors.fighting};
    }
  }
`

export const BackgroundImg = styled.img`
  position: absolute;
  bottom: -60px;
  right: -60px;
  opacity: .2;
  transform: rotate(30deg);
  z-index: 2;
`

export const FormSplitterCss = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 15px;
padding: 20px;
z-index: 3;
`

export const FormControlCss = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & label{
    display: block;
    margin-left: 5px;
    z-index: 3;
  }
`

export const InputCss = styled.input `
width: 100%;
padding: 5px;
border-radius: 10px;
border: solid black 1px;
z-index: 3;
`

export const RangeGroupCss = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
`

export const RangeCss = styled.input `
  grid-column: 1/5;
  z-index: 3;
`
export const ImgContainerCss = styled.div `
  height: 150px;
  width: 150px;
  margin: 30px auto 10px auto;
  border: solid 1px black;
  z-index: 3;

  & img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const TypesDiv = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin-top: 10px;

  & select{
    padding: 5px;
    z-index: 3;
  }
`

export const FormButton = styled.button`
  border: none;
  color: white;
  background-color: ${secondary};
  height: 50px;
  width: 100%;
  margin: 90px 0 0 auto;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 3;
`