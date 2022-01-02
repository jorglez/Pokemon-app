import { SORT_BY } from "../types";

const initialState = {
  sortBy: ""
}

//eslint-disable-next-line
export default function(state= initialState, action){
  switch (action.type) {
    case SORT_BY:
      return{
        ...state,
        sortBy: action.payload
      }
  
    default:
      return state
  }
}