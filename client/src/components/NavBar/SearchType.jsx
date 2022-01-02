import { ClearButtonCss, SearchTypeCss, TypeIconContainer, TypeList } from "../styles/searchTypeCss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTypesAction } from "../../redux/actions/getTypesActions";
import { filterActionsType } from "../../redux/actions/filterActions";
import { LabelCss } from "../styles/NavBarCss";

const SearchType = () => {

  //redux related variables to get types list - variables de redux para obtener lista de tipos
  const dispatch = useDispatch()
  const typesList = useSelector(state => state.getTypesReducer.types)
  const loading = useSelector(state => state.getTypesReducer.loading)

  //gets filter params reducer - obtiene el reducer para los parámetros de filtrado

  const dispatchFilterActionsType = pokemonType => dispatch(filterActionsType(pokemonType))


  useEffect(() => {
    const dispatchTypesList = () => dispatch(getTypesAction())
    if (typesList.length === 0) dispatchTypesList()
  }, [dispatch, typesList.length])

  const getType = e => {
    dispatchFilterActionsType(e.target.parentElement.id)
  }

  // const typeList = [
  //   { type: 1, name: "normal" },
  //   { type: 2, name: "fighting" },
  //   { type: 3, name: "flying" },
  //   { type: 4, name: "poison" },
  //   { type: 5, name: "ground" },
  //   { type: 6, name: "rock" },
  //   { type: 7, name: "bug" },
  //   { type: 8, name: "ghost" },
  //   { type: 9, name: "steel" },
  //   { type: 10, name: "fire" },
  //   { type: 11, name: "water" },
  //   { type: 12, name: "grass" },
  //   { type: 13, name: "electric" },
  //   { type: 14, name: "psychic" },
  //   { type: 15, name: "ice" },
  //   { type: 16, name: "dragon" },
  //   { type: 17, name: "dark" },
  //   { type: 18, name: "fairy" },
  // ]

  return (
    <SearchTypeCss>
      <LabelCss> Search By Type:</LabelCss>
      <TypeList>
        <ClearButtonCss onClick={()=>dispatchFilterActionsType("")}>Clear Filters</ClearButtonCss>
        {loading ? <p>Loading...</p> : typesList.map(type => (
          type.id < 20 ?
            <TypeIconContainer key={type.id} id={type.name} className={`${type.name} to-hover`} >
              <img src={`/type-icons/${type.name}.svg`} alt={type.name} onClick={getType} />
            </TypeIconContainer>
            : null
        ))}
      </TypeList>
    </SearchTypeCss>
  );
}

export default SearchType;