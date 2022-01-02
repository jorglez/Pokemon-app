import styled from "styled-components";
import { typeColors } from "./GlobalColors";
export const CardCss = styled.div `
  width: 200px;
  height:350px;
  border: 1px solid rgb(112, 112, 112);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-transform: uppercase;
  text-shadow: -1px 1px 0 black,
                1px 1px 0 black,
                1px -1px 0 black,
                -1px -1px 0 black;
  position: relative;
  z-index: 1;
  
  &.normal{
    background: ${typeColors.normal};
    box-shadow: 0 0 5px black;
  }
  &.fighting{
    background-color: ${typeColors.fighting};
    box-shadow: 0 0 5px black;
    }
  &.flying{
    background-color: ${typeColors.flying};
    box-shadow: 0 0 5px black;
  }
  &.poison{
    background-color: ${typeColors.poison};
    box-shadow: 0 0 5px black;
  }
  &.ground{
    background-color: ${typeColors.ground};
    box-shadow: 0 0 5px black;
  }
  &.rock{
    background-color: ${typeColors.rock};
    box-shadow: 0 0 5px black;
  }
  &.bug{
    background-color: ${typeColors.bug};
    box-shadow: 0 0 5px black;
  }
  &.ghost{
    background-color: ${typeColors.ghost};
    box-shadow: 0 0 5px black;
  }
  &.steel{
    background-color: ${typeColors.steel};
    box-shadow: 0 0 5px black;
  }
  &.fire{
    background-color: ${typeColors.fire};
    box-shadow: 0 0 5px black;
  }
  &.water{
    background-color: ${typeColors.water};
    box-shadow: 0 0 5px black;
  }
  &.grass{
    background-color: ${typeColors.grass};
    box-shadow: 0 0 5px black;
  }
  &.electric{
    background-color: ${typeColors.electric};
    box-shadow: 0 0 5px black;
  }
  &.psychic{
    background-color: ${typeColors.psychic};
    box-shadow: 0 0 5px black;
  }
  &.ice{
    background-color: ${typeColors.ice};
    box-shadow: 0 0 5px black;
  }
  &.dragon{
    background-color: ${typeColors.dragon};
    box-shadow: 0 0 5px black;
  }
  &.dark{
    background-color: ${typeColors.dark};
    box-shadow: 0 0 5px black;
  }
  &.fairy{
    background-color: ${typeColors.fairy};
    box-shadow: 0 0 5px black;
  }
`
export const BackgroundImg = styled.img`
  position: absolute;
  right: -20px;
  bottom: 20px;
  height: 200px;
  opacity: .3;
  z-index: 2;
  transform: rotate(30deg);
`

export const CardImgCss = styled.div `
  height: 200px;
  z-index: 3;
  

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardBodyCss = styled.div `
  margin-top: 10px;
  z-index: 3;
  & h4{
    text-align: center;
  }
    & a{
    text-decoration: none;
  }
`
export const TypesContainerCss = styled.div `
margin-top: 10px;
  display: flex;
  justify-content: space-around;
  z-index: 3;
`

export const ButtonMore = styled.button `
  display: block;
  margin-top: 10px;
  width: 100%;
  border: none;
  background-color: rgba(44, 153, 83,1);
  height: 40px;
  color: white;
  z-index: 3;
`