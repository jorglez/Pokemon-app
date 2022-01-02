import axios from "axios";
import { POST_POKEMON, POST_POKEMON_SUCCESS, POST_POKEMON_ERROR } from "../types";

export function postPokemonAction(info){
  return async dispatch =>{
    dispatch({
      type:POST_POKEMON,
      payload:{
        loading:true,
        error:false
      }
    })

    try {
      const apiResponse = await axios.post(`http://localhost:3001/pokemons`, info)
      const {data} = apiResponse

      dispatch({
        type:POST_POKEMON_SUCCESS,
        payload:{
          response:data,
          loading:false,
          error:false
        }
      })
      
    } catch (error) {
      console.log(error)
      dispatch({
        type: POST_POKEMON_ERROR,
        payload:{
          loading:false,
          error:true
        }
      })
    }
  }
}