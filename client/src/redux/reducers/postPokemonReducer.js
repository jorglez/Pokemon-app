import { POST_POKEMON, POST_POKEMON_SUCCESS, POST_POKEMON_ERROR } from "../types";

const initialState = {
  response:{},
  loading: false,
  error: false
}

//eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case POST_POKEMON:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      }

    case POST_POKEMON_SUCCESS:
      return {
        ...state,
        response: action.payload.response,
        loading: action.payload.loading,
        error: action.payload.error
      }

    case POST_POKEMON_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      }

    default:
      return state
  }
}