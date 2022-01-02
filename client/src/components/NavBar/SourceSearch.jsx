import { useDispatch } from "react-redux";
import { filterActionsSource } from "../../redux/actions/filterActions";
import { FormControlCss, LabelCss, SelectCss } from "../styles/NavBarCss";


const SourceSearch = () => {

  const dispatch = useDispatch()
  //get filterReducer to update source filter param - obtiene filterReducer para actualizar el parametro de filtrado por origen
  const dispatchFilterActionSource = source => dispatch(filterActionsSource(source))
  const getSource = e => {
    dispatchFilterActionSource(e.target.value)
  }
  //reset filter when clicking on "home" from "add pokemon" - resetea el filtro cuando se regresa de "add pokemon" a "home" 
dispatchFilterActionSource("both")


  return (
    <FormControlCss>
      <LabelCss htmlFor="source-select">Search by source</LabelCss>
      <SelectCss name="source" id="source" defaultValue="both" onChange={getSource}>
        <option value="both">both</option>
        <option value="api">api</option>
        <option value="mine">Created by me</option>
      </SelectCss>
    </FormControlCss>
  );
}

export default SourceSearch;