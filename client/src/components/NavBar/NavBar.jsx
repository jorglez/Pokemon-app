import { Link, Route, Switch } from "react-router-dom";
import { NavBarCss, NavIconsCss } from "../styles/NavBarCss";
import NameSearch from "./NameSearch";
import SearchType from "./SearchType";
import SortInput from "./SortInput";
import SourceSearch from "./SourceSearch";


const NavBar = () => {
  return (
    <NavBarCss>
      <NavIconsCss>
        <Link to={"/home"}><i className="fas fa-home fa-2x"></i></Link>
        <Link to={"/newPokemon"}><i className="fas fa-plus-circle fa-2x"></i></Link>
      </NavIconsCss>

      <Switch>
        {/*array of paths to use filters in both pages - arreglo de paths para poder usar filtros en ambas páginas*/}
        <Route path={["/home", "/results"]}>
          <NameSearch />
          <SourceSearch />
          <SortInput />
          <SearchType />
        </Route>
      </Switch>

    </NavBarCss>
  );
}

export default NavBar;