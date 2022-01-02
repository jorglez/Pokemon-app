import styled from "styled-components";
import { interfaceColors } from "./GlobalColors";

const { primary, contrast } = interfaceColors

export const NavBarCss = styled.nav`
  min-width:320px;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  padding:30px;
  background-color: ${primary};
`

export const NavIconsCss = styled.div`
  display:flex;
  justify-content:space-around;
  padding: 20px 10px;
  border-radius: 10px;
  background: ${contrast};
  background: linear-gradient(45deg, rgba(74,57,55,1) 50%, rgba(44, 153, 83,1) 50%);

  & a{
    color: white;
  }
`
export const NavFormCss = styled.form`
  margin-top:20px;
  display: flex;
  flex-direction: column;
`

export const FormControlCss = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & label{
    
  }
`
export const LabelCss = styled.label`
  background: ${contrast};
  background: linear-gradient(45deg, rgba(74,57,55,1) 60%, rgba(44, 153, 83,0) 40%);
  padding: 5px 15px;
  border-radius: 15px;
  color: white;
`
export const SelectCss = styled.select`
  border:none;
  padding: 5px 10px;
  border-radius: 10px;
`

export const SearchInputCss = styled.div`
  display: grid;
  grid-template-columns:repeat(5, 1fr);
  & input{
    grid-column:1/5;
    padding:7px;
    border:none;
    border-right:none;
    border-radius:10px 0 0 10px;
  }
  & button{
    border:none;
    border-radius:0 10px 10px 0;
    background-color: white;
  }
`