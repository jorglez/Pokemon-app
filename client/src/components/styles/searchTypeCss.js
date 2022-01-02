import styled from "styled-components";
import { typeColors } from "./GlobalColors";

export const SearchTypeCss = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:column;
`
export const ClearButtonCss = styled.button `
  grid-column: 1/4;
  padding: 10px;
  border: none;
  background-color: rgba(44, 153, 83,1);
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  transition:all .2s ease;
  

  &:hover{
    box-shadow: 0 0 7px black;
  }
`
export const TypeList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`
export const TypeIconContainer = styled.div `
  width: 60px;
  height: 60px;
  padding: 13px;
  border-radius: 100%;
  margin: auto;
  background-color: red;
  transition: .2s ease;

  &.to-hover:hover{
    filter: saturate(200%);
    transform: scale(1.1);
    cursor: pointer;
  }

  &.normal{
    background: ${typeColors.normal};
    box-shadow: 0 0 10px black;
  }
  &.fighting{
    background-color: ${typeColors.fighting};
    box-shadow: 0 0 10px black;
    }
  &.flying{
    background-color: ${typeColors.flying};
    box-shadow: 0 0 10px black;
  }
  &.poison{
    background-color: ${typeColors.poison};
    box-shadow: 0 0 10px black;
  }
  &.ground{
    background-color: ${typeColors.ground};
    box-shadow: 0 0 10px black;
  }
  &.rock{
    background-color: ${typeColors.rock};
    box-shadow: 0 0 10px black;
  }
  &.bug{
    background-color: ${typeColors.bug};
    box-shadow: 0 0 10px black;
  }
  &.ghost{
    background-color: ${typeColors.ghost};
    box-shadow: 0 0 10px black;
  }
  &.steel{
    background-color: ${typeColors.steel};
    box-shadow: 0 0 10px black;
  }
  &.fire{
    background-color: ${typeColors.fire};
    box-shadow: 0 0 10px black;
  }
  &.water{
    background-color: ${typeColors.water};
    box-shadow: 0 0 10px black;
  }
  &.grass{
    background-color: ${typeColors.grass};
    box-shadow: 0 0 10px black;
  }
  &.electric{
    background-color: ${typeColors.electric};
    box-shadow: 0 0 10px black;
  }
  &.psychic{
    background-color: ${typeColors.psychic};
    box-shadow: 0 0 10px black;
  }
  &.ice{
    background-color: ${typeColors.ice};
    box-shadow: 0 0 10px black;
  }
  &.dragon{
    background-color: ${typeColors.dragon};
    box-shadow: 0 0 10px black;
  }
  &.dark{
    background-color: ${typeColors.dark};
    box-shadow: 0 0 10px black;
  }
  &.fairy{
    background-color: ${typeColors.fairy};
    box-shadow: 0 0 10px black;
  }
  & img{
    height: 100%;
    width: 100%;
  }
`
