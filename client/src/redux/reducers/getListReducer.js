import { GET_LIST, GET_LIST_SUCCESS } from "../types";

const initialState = {
  list:[],
  loading:false,
  error:false
}

//eslint-disable-next-line
export default function(state = initialState, action){
  switch (action.type) {
    case GET_LIST:
      return{
        ...state,
        loading:true
      }
    case GET_LIST_SUCCESS:
      return{
        ...state,
        loading:false,
        list: action.payload
      }
    default:
      return state
  }
} 