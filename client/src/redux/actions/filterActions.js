import { FILTER_TYPES, FILTER_SOURCE } from "../types";

export function filterActionsType(pokemonType){
  return dispatch =>{
    dispatch({
      type: FILTER_TYPES,
      payload: pokemonType
    })
  }
}

export function filterActionsSource(source){
  return dispatch =>{
    dispatch({
      type: FILTER_SOURCE,
      payload: source
    })
  }
}