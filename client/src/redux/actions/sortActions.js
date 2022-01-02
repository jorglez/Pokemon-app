import { SORT_BY } from "../types";

export function sortAction(param){
  return dispatch =>{
    dispatch({
      type: SORT_BY,
      payload: param
    })
  }
}