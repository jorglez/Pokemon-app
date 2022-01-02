import { GET_BY_ID, GET_BY_ID_ERROR, GET_BY_ID_SUCCESS } from '../types'

const initialState = {
  pokemon: {},
  loading: false,
  error: false
}

//eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BY_ID:
      return {
        ...state,
        loading: action.payload.loading
      }
    case GET_BY_ID_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        pokemon: action.payload.pokemon
      }
    case GET_BY_ID_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      }
    default:
      return state
  }
}