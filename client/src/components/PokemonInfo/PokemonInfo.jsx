import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ImgContainerCss, InfoDiv, MainCss, BackgroundImage } from "../styles/PokemonInfoCss";
import { FormControlCss, LabelCss } from "../styles/NavBarCss";
import { FormButton } from '../styles/NewPokemonCss';
import { deletePokemonAction } from '../../redux/actions/deletePokemonAction';
import { useHistory } from 'react-router-dom';

const PokemonInfo = () => {

  const pokemonInfo = useSelector(state => state.pokemonInfoReducer.pokemon)
  const { response } = useSelector(state => state.deletePokemonReducer)
  const history = useHistory()
  const dispatch = useDispatch()

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

    //eslint-disable-next-line
  }, [])


  const clickHandle = () => {
    console.log(pokemon.id)
    const confirmText = "Do you really want to delete this pokemon?"
    if (window.confirm(confirmText)) {
      const dispatchDeletePokemonAction =(id)=>dispatch(deletePokemonAction(id))
      dispatchDeletePokemonAction(pokemon.id)

      alert(response.msg)
      history.push("/home")
    }

  }



  const data = [
    { name: "Hp", val: pokemon.hp },
    { name: "Att.", val: pokemon.attack },
    { name: "Def.", val: pokemon.defense },
    { name: "Sp.", val: pokemon.speed }
  ]

  return ( //crear el componente que muestra info del pokemon
    <MainCss>

      <InfoDiv>
        {!pokemon.types ? null : <BackgroundImage style={{
          WebkitMaskImage: `url("/type-icons/${pokemon.types[0].name}.svg")`,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "350px"
        }}
          className={pokemon.types[0].name}
        ></BackgroundImage>}
        <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>{pokemon.name}</h1>
        <h2 style={{ textAlign: "center", zIndex: 2 }}>Base Stats:</h2>
        <ImgContainerCss>
          <img src={pokemon.img} alt="" />
        </ImgContainerCss>

        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={45} />
            <Radar
              name="pokemon"
              dataKey="val"
              stroke={"black"}
              fill={"black"}
              fillOpacity={.5}
            />
          </RadarChart>
        </ResponsiveContainer>

        <div>
          <FormControlCss>
            <LabelCss>height</LabelCss>
            <p>{`${(pokemon.height / 10)}m / ${((pokemon.height / 10) * 3.28).toFixed(2)}ft`}</p>
          </FormControlCss>
          <FormControlCss>
            <LabelCss>weight</LabelCss>
            <p>{`${pokemon.weight / 10}kg / ${((pokemon.weight / 10) * 2.2).toFixed(2)}lb`}</p>
          </FormControlCss>
        </div>
        {typeof pokemon.id === "string" ?

          <FormButton style={{ marginTop: "50px" }} onClick={clickHandle}>Delete Pokemon</FormButton>

          : null}

      </InfoDiv>


    </MainCss>
  );
}

export default PokemonInfo;