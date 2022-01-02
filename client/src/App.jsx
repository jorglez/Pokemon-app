import Landing from './components/Landing';
import NavBar from './components/NavBar/NavBar';
import CardsContainer from './components/CardsSection/CardsContainer';
import NewPokemon from './components/NewPokemon/NewPokemon';
import NameSearchResults from './components/CardsSection/NameSearchResults';

import { Switch, Route } from "react-router-dom"
import { ContainerCss } from './components/styles/ContainerCss';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import { AppCss } from './components/styles/AppCss';


function App() {

  return (
    <AppCss className="App">
      <Switch>
        <Route //ruta que solo muestra el Landing page - this route only shows the Landing page
          exact path="/"
          component={Landing}
        />
      </Switch>

      <Switch>
        <Route path="/:subpage">
          <ContainerCss>
            <NavBar />

            <Route path="/home">
              <CardsContainer />
            </Route>
            <Route path="/results">
              <NameSearchResults />
            </Route>

            <Route path={"/newPokemon"}>
              <NewPokemon />
            </Route>
            <Route path={"/pokemons/:id"}>
              <PokemonInfo/>
            </Route>
          </ContainerCss>
        </Route>
      </Switch>

    </AppCss >
  );
}

export default App;
