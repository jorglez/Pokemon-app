import { SEARCH_BY_NAME, SEARCH_BY_NAME_SUCCESS, SEARCH_BY_NAME_ERROR } from "../types"

//initialState saves the data fetched from the API - IS guarda la data tomada de la API
const initialState = {
  pokemonData: [],
  error: false, //in case server has no response - por si el servidor no responde
  loading: false //to trigger the loader animation - para mostrar animacion de carga
}


//eslint-disable-next-line
export default function (state = initialState, action) {

  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      }

    case SEARCH_BY_NAME_SUCCESS:
      return {
        ...state,
        pokemonData: action.payload.pokemonData,
        loading: action.payload.loading,
        error: action.payload.error
      }


    case SEARCH_BY_NAME_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      }
    default:
      return state
  }
}