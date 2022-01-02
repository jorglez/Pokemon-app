import { useDispatch } from "react-redux";
import { sortAction } from "../../redux/actions/sortActions";
import { FormControlCss, LabelCss, SelectCss } from "../styles/NavBarCss";

const SortInput = () => {

  const dispatch = useDispatch()
  //function to dispatch param to state - funcion para mandar el parametro al state
  const dispatchSortAction = param => dispatch(sortAction(param))

  //function to trigger dispatch on change - funcion para activar dispatch cuando haya cambios
  const getSort = e =>{
    dispatchSortAction(e.target.value)
  }
  dispatchSortAction("")
  return (
    <FormControlCss>
      <LabelCss htmlFor="sort-input">Order by:</LabelCss>
      <SelectCss name="sort-input" id="sort-input" defaultValue="" onChange={getSort}>
        <option value=""disabled>--Options--</option>
        <option value="id">Id</option>
        <option value="atoz">A - Z</option>
        <option value="ztoa">Z - A</option>
        <option value="asc">Attack &uarr;</option>
        <option value="desc">Attack &darr;</option>
      </SelectCss>
    </FormControlCss>
  );
}
 
export default SortInput;