import { combineReducers } from "redux";
import searchPokemonReducer from "./searchPokemonReducer";
import getListReducer from "./getListReducer";
import getTypesReducer from "./getTypesReducer";
import getByIdReducer from "./getByIdReducer";
import postPokemonReducer from "./postPokemonReducer";
import filterReducer from "./filterReducer";
import sortReducer from "./sortReducer";

const reducer = combineReducers({
  searchPokemonReducer,
  getListReducer,
  getTypesReducer,
  getByIdReducer,
  postPokemonReducer,
  filterReducer,
  sortReducer
})

export default reducer