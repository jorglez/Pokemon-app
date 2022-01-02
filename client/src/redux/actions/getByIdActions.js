import {GET_BY_ID, GET_BY_ID_ERROR, GET_BY_ID_SUCCESS} from '../types'
import axios from 'axios'

export function getByIdAction(id){
  return async dispatch =>{
    dispatch({
      type:GET_BY_ID,
      payload:{loading:true}
    })

    try {
      const apiResponse = await axios.get(`http://localhost:3001/pokemons/${id}`)
      const {data} = apiResponse
      
      dispatch({
        type:GET_BY_ID_SUCCESS,
        payload:{
          pokemon: data,
          loading:false,
          error:false
        }
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_BY_ID_ERROR,
        payload:{
          error:true,
          loading:false
        }
      })
    }
  }
}