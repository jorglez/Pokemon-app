import { FILTER_TYPES, FILTER_SOURCE } from "../types";

const initialState = {
  pokemonType:"",
  source:"both"
}

//eslint-disable-next-line
export default function(state=initialState, action){
  switch (action.type) {
    case FILTER_TYPES:
      return{
        ...state,
        pokemonType: action.payload
      }
    case FILTER_SOURCE:
      return{
        ...state,
        source: action.payload
      }

    default:
      return state
  }
}