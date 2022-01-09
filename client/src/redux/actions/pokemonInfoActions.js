import { POKEMON_INFO } from "../types";

export function pokemonInfoActions(pokemon) {
  return dispatch => {
    dispatch({
      type: POKEMON_INFO,
      payload: pokemon
    })
  }
}