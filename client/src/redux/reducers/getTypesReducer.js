import { GET_TYPES, GET_TYPES_SUCCESS, GET_TYPES_ERROR } from "../types"

const initialState = {
  types: [],
  error: false,
  loading: false
}

//eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading
      }
    case GET_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload.types,
        error: action.payload.error,
        loading: action.payload.loading
      }
    case GET_TYPES_ERROR:
      return {
        ...state,

      }
    default:
      return state
  }
}