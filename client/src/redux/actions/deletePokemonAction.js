import { DELETE_POKEMON, DELETE_POKEMON_SUCCESS, DELETE_POKEMON_ERROR } from "../types";
import axios from 'axios'
export const deletePokemonAction = (id) => {
  return async dispatch => {

    dispatch({
      type: DELETE_POKEMON,
      payload: {
        error: false,
        loading: true
      }
    })
    try {
      const apiResponse = await axios.delete(`http://localhost:3001/pokemons/${id}`)
      const { data } = apiResponse
      console.log("apiResponse: ", apiResponse)
      console.log("response status: ", apiResponse.status)
      console.log("data: ", apiResponse.data)
      if (apiResponse.status !== 200) {

        return dispatch({
          type: DELETE_POKEMON_ERROR,
          payload: {
            response: {msg:data.message},
            error: true,
            loading: false
          }
        })

      }
      dispatch({
        type: DELETE_POKEMON_SUCCESS,
        payload: {
          response: data,
          error: false,
          loading: false
        }
      })
    } catch (error) {
      dispatch({
        type: DELETE_POKEMON_SUCCESS,
        payload: {
          response: error,
          error: false,
          loading: false
        }
      })
    }
  }
}