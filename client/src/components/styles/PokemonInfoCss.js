import styled from "styled-components";
import { typeColors } from "./GlobalColors";

export const MainCss = styled.main`
  display: flex;
  width: 100%;
  color: black;
  min-height: 100%;
`

export const InfoDiv = styled.div`
  margin: auto;
  background-color: white;
  display: grid;
  position: relative;
  overflow: hidden;
  padding: 20px 40px;
  border-radius: 30px;
  border: solid 1px rgb(120,120,120);
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  width: 900px;
  
  & div{
    z-index: 2;
  }
`

export const ImgContainerCss = styled.div`
  width: 400px;

  & img{
    width: 100%;
  }
`

export const BackgroundImage = styled.div`
  width: 650px;
  height: 650px;
  position: absolute;
  right: -100px;
  bottom: -100px;
  transform: rotate(30deg);
  opacity: .7;
  z-index: 0;
  border: 15px solid black;


  &.normal{
    background-color: ${typeColors.normal};
  }
  &.fighting{
    background-color: ${typeColors.fighting};
    }
  &.flying{
    background-color: ${typeColors.flying};
  }
  &.poison{
    background-color: ${typeColors.poison};
  }
  &.ground{
    background-color: ${typeColors.ground};
  }
  &.rock{
    background-color: ${typeColors.rock};
  }
  &.bug{
    background-color: ${typeColors.bug};
  }
  &.ghost{
    background-color: ${typeColors.ghost};
  }
  &.steel{
    background-color: ${typeColors.steel};
  }
  &.fire{
    background-color: ${typeColors.fire};
  }
  &.water{
    background-color: ${typeColors.water};
  }
  &.grass{
    background-color: ${typeColors.grass};
  }
  &.electric{
    background-color: ${typeColors.electric};
  }
  &.psychic{
    background-color: ${typeColors.psychic};
  }
  &.ice{
    background-color: ${typeColors.ice};
  }
  &.dragon{
    background-color: ${typeColors.dragon};
  }
  &.dark{
    background-color: ${typeColors.dark};
  }
  &.fairy{
    background-color: ${typeColors.fairy};
  }
`