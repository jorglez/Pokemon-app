import { BackgroundImg, ButtonMore, CardBodyCss, CardCss, CardImgCss, TypesContainerCss } from "../styles/cardCss";
import { TypeIconContainer } from "../styles/searchTypeCss";
//redux imports
import { useDispatch } from 'react-redux'
import { pokemonInfoActions } from '../../redux/actions/pokemonInfoActions'
import { useHistory } from "react-router-dom";

const Card = ({ pokemon }) => {

  const dispatch = useDispatch()
  const dispatchPokemonInfoActions = (pk) => dispatch(pokemonInfoActions(pk))
  const history = useHistory()

  const clickHandle = pk => {
    dispatchPokemonInfoActions(pk)
    history.push(`/pokemons/${pokemon.name}`)
  }

  return (
    <CardCss className={`${pokemon.types[0].name}`}>
      <CardImgCss>
        <img src={pokemon.img} alt="" />
      </CardImgCss>
      <CardBodyCss>
        <h4>{pokemon.name}</h4>
        <TypesContainerCss>

          {//works for single or double type - sirve si tiene 1 o 2 tipos
            pokemon.types.map((type, i) => (
              type ?
                <TypeIconContainer className={`${type.name}`} key={i}>
                  <img src={`/type-icons/${type.name}.svg`} alt={`${type.name} icon`} />
                </TypeIconContainer>
                : null
            ))}

        </TypesContainerCss>
        <ButtonMore onClick={() => clickHandle(pokemon)} > More Info</ButtonMore>
      </CardBodyCss>
      <BackgroundImg src={`/type-icons/${pokemon.types[0].name}.svg`} />
    </CardCss>
  );
}

export default Card;