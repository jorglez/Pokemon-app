import { POKEMON_INFO } from "../types";


const initialState = {
  pokemon:{}
}
//eslint-disable-next-line
export default function(state = initialState, action){
  switch (action.type) {
    case POKEMON_INFO:
      return {
        ...state,
        pokemon: action.payload
      }
  
    default:
      return state
  }
}