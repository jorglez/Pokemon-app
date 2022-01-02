import {GET_LIST, GET_LIST_ERROR, GET_LIST_SUCCESS} from "../types"
import axios from "axios"

export function getListAction(){
  return async dispatch =>{
    //starts the loading event - inicia el evento de carga
    dispatch({type:GET_LIST})
    try {
      const apiResponse = await axios.get(`http://localhost:3001/pokemons`)
      const {data} = apiResponse

      dispatch({
        type:GET_LIST_SUCCESS,
        payload:data
      })
    } catch (error) {
      console.log(error)
      dispatch({ type:GET_LIST_ERROR})
    }
  }
}