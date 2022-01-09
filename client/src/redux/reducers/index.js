import { combineReducers } from "redux";
import searchPokemonReducer from "./searchPokemonReducer";
import getListReducer from "./getListReducer";
import getTypesReducer from "./getTypesReducer";
import postPokemonReducer from "./postPokemonReducer";
import filterReducer from "./filterReducer";
import sortReducer from "./sortReducer";
import pokemonInfoReducer from "./pokemonInfoReducer";

const reducer = combineReducers({
  searchPokemonReducer,
  getListReducer,
  getTypesReducer,
  postPokemonReducer,
  filterReducer,
  sortReducer,
  pokemonInfoReducer
})

export default reducer