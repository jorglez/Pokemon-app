
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Loading from "../CardsSection/Loading";
import { ImgContainerCss, InfoDiv, MainCss, BackgroundImage } from "../styles/PokemonInfoCss";
import { FormControlCss, LabelCss } from "../styles/NavBarCss";


const PokemonInfo = () => {

  const pokemonInfo = useSelector(state => state.pokemonInfoReducer.pokemon)
  let loading = false

  const [pokemon, setPokemon] = useState(pokemonInfo)

  useEffect(() => {
    const checkPokemon = () => {
      let local = JSON.parse(localStorage.getItem("pokemonInfoLocal"))
      console.log()
      if (Object.keys(pokemonInfo).length !== 0) {
        localStorage.setItem("pokemonInfoLocal", JSON.stringify(pokemonInfo))
        local = JSON.parse(localStorage.getItem("pokemonInfoLocal"))
      }
  
      setPokemon(local)
    }

    checkPokemon()
  }, [])



  return ( //crear el componente que muestra info del pokemon
    <MainCss>
      {loading ? <Loading /> : (
        <InfoDiv>
          {!pokemon.types ? null : <BackgroundImage style={{
            WebkitMaskImage: `url("/type-icons/${pokemon.types[0].name}.svg")`,
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "600px"
          }}
            className={pokemon.types[0].name}
          ></BackgroundImage>}
          <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>{pokemon.name}</h1>
          <h2 style={{ textAlign: "center", zIndex: 2 }}>Base Stats:</h2>
          <ImgContainerCss>
            <img src={pokemon.img} alt="" />
          </ImgContainerCss>

          <div>

            <FormControlCss>
              <LabelCss>Hp</LabelCss>
              <p>{pokemon.hp}</p>
            </FormControlCss>
            <FormControlCss>
              <LabelCss>Attack</LabelCss>
              <p>{pokemon.attack}</p>
            </FormControlCss>
            <FormControlCss>
              <LabelCss>Defense</LabelCss>
              <p>{pokemon.defense}</p>
            </FormControlCss>
            <FormControlCss>
              <LabelCss>speed</LabelCss>
              <p>{pokemon.speed}</p>
            </FormControlCss>
            <FormControlCss>
              <LabelCss>height</LabelCss>
              <p>{`${(pokemon.height / 10)}m / ${((pokemon.height / 10) * 3.28).toFixed(2)}ft`}</p>
            </FormControlCss>
            <FormControlCss>
              <LabelCss>weight</LabelCss>
              <p>{`${pokemon.weight / 10}kg / ${((pokemon.weight / 10) * 2.2).toFixed(2)}lb`}</p>
            </FormControlCss>
          </div>


        </InfoDiv>

      )}

    </MainCss>
  );
}

export default PokemonInfo;