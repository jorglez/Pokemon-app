import { GET_TYPES, GET_TYPES_SUCCESS, GET_TYPES_ERROR } from "../types"
import axios from "axios"

export function getTypesAction(){
  return async dispatch =>{
    dispatch({ 
      type: GET_TYPES,
      payload: {
        loading:true,
        error:false
      }
    })
    
    try {
      const apiResponse = await axios.get(`http://localhost:3001/types`)
      const {data} = apiResponse
      
      dispatch({
        type:GET_TYPES_SUCCESS,
        payload: {
          types: data,
          loading:false,
          error:false
        }
      })

    } catch (error) {
      console.log(error)
      dispatch({
        type:GET_TYPES_ERROR,
        payload:{
          loading:false,
          error:true
        }
      })
    }
  }
}