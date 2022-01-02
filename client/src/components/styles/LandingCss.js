import styled from "styled-components"


export const LandingCss = styled.section`
  width: 100vw;
  height: 100vh;
  font-family: 'Orbitron', sans-serif;
  background-image: url("/bg2.jpg");
  background-size: cover;
  background-position: center top;
  position: relative;
`
export const LandingButtonCss = styled.button`
  //design styles
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  background-color: transparent;
  color: rgb(2, 109, 2);
  border: solid 2px rgb(2, 109, 2);
  border-radius: 5px;
  font-size: 36px;
  padding: 1rem;
  //position styles
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //animation styles
  transition: .3s;
  
  &:hover{
    background-color: rgb(2, 109, 2);
    color: white;
  }
`
export const LandingTitleCss = styled.h1`
  font-size: 50px;
  text-align: center;
  display: block;
  
  padding-top: 50px;
`