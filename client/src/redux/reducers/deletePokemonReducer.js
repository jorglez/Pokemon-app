import { DELETE_POKEMON, DELETE_POKEMON_SUCCESS, DELETE_POKEMON_ERROR } from "../types";

const initialState = {
  response: {},
  error: false,
  loading: false
}

export default function deletePokemonReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_POKEMON:
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading
      }
    case DELETE_POKEMON_SUCCESS:
      return {
        ...state,
        response: action.payload.response,
        error: action.payload.error,
        loading: action.payload.loading
      }
    case DELETE_POKEMON_ERROR:
      return {
        ...state,
        response: action.payload.response,
        error: action.payload.error,
        loading: action.payload.loading
      }

    default:
      return state
  }
}