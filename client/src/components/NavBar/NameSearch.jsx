import { useState } from "react";
import { LabelCss, NavFormCss, SearchInputCss } from "../styles/NavBarCss";

//redux related imports - imports de cosas de redux
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions/searchPokemonActions";
import { useHistory } from "react-router-dom";


const NameSearch = () => {

  const dispatch = useDispatch()
  const dispatchSearchByName = (name) => dispatch(searchByName(name))
  const history = useHistory()

  const [searchName, getSearchName] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    //validate input content - validar contenido del input
    if(searchName.trim() === "") return console.log("escribe algo")

    dispatchSearchByName(searchName)
    history.push("/results")
  }
  return (
    <NavFormCss onSubmit={handleSubmit}>

      <LabelCss htmlFor="searchName">Search by name:</LabelCss>
      <SearchInputCss>
        <input type="text" name="searchName" value={searchName} onChange={(e) => getSearchName(e.target.value)} />
        <button type="submit"><i className="fas fa-search"></i></button>
      </SearchInputCss>

    </NavFormCss>
  );
}

export default NameSearch;