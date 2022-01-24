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
  padding: 20px;
  border-radius: 30px;
  border: solid 1px rgb(120,120,120);
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  width: 600px;
  
  & div{
    z-index: 2;
  }
  &.recharts-responsive-container{
    margin: auto;
  }
`

export const ImgContainerCss = styled.div`
  width: 200px;
  margin: auto;
  & img{
    width: 100%;
  }
`

export const BackgroundImage = styled.div`
  width: 430px;
  height: 430px;
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