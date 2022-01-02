//http://localhost/3001
import { SEARCH_BY_NAME, SEARCH_BY_NAME_SUCCESS, SEARCH_BY_NAME_ERROR } from "../types"
import axios from "axios"


export function searchByName(name) {
  return async dispatch => {
    //start the loading event - comenzar el evento de carga
    dispatch({
      type: SEARCH_BY_NAME,
      payload:{
        error:false,
        loading:true
      }
    })

    try {
      //send the query to the API - enviar la consulta a la API
      const apiResponse = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
      const data = apiResponse.data
      //if successful, update state with the response - si fue exitoso, actualizar el estado con la respuesta
      if (data[0] === null) {
        return dispatch({
          type: SEARCH_BY_NAME_ERROR,
          payload: {
            error:true,
            loading:false
          }
        })
      }
      dispatch({
        type: SEARCH_BY_NAME_SUCCESS,
        payload: {
          pokemonData: data,
          error:false,
          loading:false
        }
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: SEARCH_BY_NAME_ERROR,
        payload: true
      })
    }
  }
}