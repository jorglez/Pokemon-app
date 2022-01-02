import { Link } from "react-router-dom";
import { BackgroundImg, ButtonMore, CardBodyCss, CardCss, CardImgCss, TypesContainerCss } from "../styles/cardCss";
import { TypeIconContainer } from "../styles/searchTypeCss";

const Card = ({ pokemon }) => {
  
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
        <Link to={`/pokemons/${pokemon.id}`}><ButtonMore> More Info</ButtonMore></Link>
      </CardBodyCss>
      <BackgroundImg src={`/type-icons/${pokemon.types[0].name}.svg`} />
    </CardCss>
  );
}

export default Card;