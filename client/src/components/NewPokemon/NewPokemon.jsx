import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getTypesAction } from "../../redux/actions/getTypesActions";
import { postPokemonAction } from "../../redux/actions/postPokemonActions";
import { FormControlCss, InputCss, NewPokemonCss, FormSplitterCss, RangeCss, RangeGroupCss, ImgContainerCss, TypesDiv, FormButton, BackgroundImg } from "../styles/NewPokemonCss";
import { LabelCss } from "../styles/NavBarCss";


const NewPokemon = () => {

  //get types from DB to fill the <select> elements - Obtener tipos desde la DB para llenar los select
  const dispatch = useDispatch()
  const typesList = useSelector(state => state.getTypesReducer.types)
  const loadingTypes = useSelector(state => state.getTypesReducer.loading)

  useEffect(() => {
    const dispatchTypesList = () => dispatch(getTypesAction())
    if (typesList.length === 0) dispatchTypesList()
  }, [dispatch, typesList.length])

  //Redux connection to send data - Conexión a Redux para mandar los datos
  const response = useSelector(state => state.postPokemonReducer.response)
  const loadingResponse = useSelector(state => state.postPokemonReducer.loading)

  //saves error ig there's no name input - guarda error si no se ha escrito nombre
  const [error, setError] = useState({ status: false, msg: "" })

  const [message, setMessage] = useState("Add Pokemon")

  //saves the form data to send it - guarda los datos del form para enviarlos
  const [pokemonData, getPokemonData] = useState({
    name: "",
    hp: 10,
    attack: 10,
    defense: 10,
    speed: 10,
    height: 10,
    weight: 10,
    img: "",
    type1: "",
    type2: ""
  })

  const inputHandler = e => {
    getPokemonData({
      ...pokemonData,
      [e.target.name]: e.target.value
    })
  }


  const formHandler = e => {
    e.preventDefault()
    //verify data before sending - verificar los datos antes de enviarlos
    if (!pokemonData.name) {
      setError({ status: true, msg: "Name value is required" })

      setTimeout(() => {
        setError({ status: false, msg: "" })
      }, 3000);
      return
    }
    let { type1, type2 } = pokemonData

    //Types can be empty but not the same - Los tipos pueden estar vacíos pero no repetirse
    if (type1 !== "" && type1 !== "0") {
      if ((type1 === type2)) {
        setError({ status: true, msg: "Types can't be duplicate" })

        setTimeout(() => {
          setError({ status: false, msg: "" })
        }, 3000);
        return
      }
    }

    //If there are no errors, send the data - Si no hay errores, mandar los datos
    const dispatchPostPokemon = pokemonData => dispatch(postPokemonAction(pokemonData))
    dispatchPostPokemon(pokemonData)

    setMessage(response.msg)
    setTimeout(() => {
      setMessage("Add Pokemon")
    }, 3000);
  }

  return (
    <NewPokemonCss onSubmit={formHandler}>
      {!error.status ? <h2>{message}</h2> : <h2 className="error">{error.msg}</h2> }
      <FormSplitterCss>
        <div>
          <FormControlCss>
            <LabelCss htmlFor="name">Name:</LabelCss>

            <InputCss type="text" name="name" id="name" placeholder="Pokemon name"
              onChange={inputHandler} />

          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="hp">hp:</LabelCss>
            <RangeGroupCss>
              <RangeCss min="10" max="200" type="range" name="hp" id="hp" placeholder="Pokemon hp" value={pokemonData.hp} onChange={inputHandler} />
              <InputCss min="10" max="200" type="text" name="hp" id="hp" value={pokemonData.hp} onChange={inputHandler} />
            </RangeGroupCss>
          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="attack">attack:</LabelCss>
            <RangeGroupCss>
              <RangeCss min="10" max="200" type="range" name="attack" id="attack" placeholder="Pokemon attack" value={pokemonData.attack} onChange={inputHandler} />
              <InputCss min="10" max="200" type="text" name="attack" id="attack" value={pokemonData.attack} onChange={inputHandler} />
            </RangeGroupCss>
          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="defense">defense:</LabelCss>
            <RangeGroupCss>
              <RangeCss min="10" max="200" type="range" name="defense" id="defense" placeholder="Pokemon defense" value={pokemonData.defense} onChange={inputHandler} />
              <InputCss min="10" max="200" type="text" name="defense" id="defense" value={pokemonData.defense} onChange={inputHandler} />
            </RangeGroupCss>
          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="speed">speed:</LabelCss>
            <RangeGroupCss>
              <RangeCss min="10" max="200" type="range" name="speed" id="speed" placeholder="Pokemon speed" value={pokemonData.speed} onChange={inputHandler} />
              <InputCss min="10" max="200" type="text" name="speed" id="speed" value={pokemonData.speed} onChange={inputHandler} />
            </RangeGroupCss>
          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="height">height:</LabelCss>
            <RangeGroupCss>
              <RangeCss min="10" max="200" type="range" name="height" id="height" placeholder="Pokemon height" value={pokemonData.height} onChange={inputHandler} />
              <InputCss min="10" max="200" type="text" name="height" id="height" value={pokemonData.height} onChange={inputHandler} />
            </RangeGroupCss>
          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="weight">weight:</LabelCss>
            <RangeGroupCss>
              <RangeCss min="10" max="200" type="range" name="weight" id="weight" placeholder="Pokemon weight" value={pokemonData.weight} onChange={inputHandler} />
              <InputCss min="10" max="200" type="text" name="weight" id="weight" value={pokemonData.weight} onChange={inputHandler} />
            </RangeGroupCss>
          </FormControlCss>


        </div>
        <div style={{zIndex:3}}>
          <ImgContainerCss>
            {pokemonData.img ? <img src={pokemonData.img} alt="" on /> : null}
          </ImgContainerCss>

          <FormControlCss>
            <LabelCss htmlFor="img">Image url:</LabelCss>
            <InputCss type="text" name="img" id="img" placeholder="Pokemon img-url"
              onChange={inputHandler} />
          </FormControlCss>

          <FormControlCss>
            <LabelCss htmlFor="type1">Choose Types</LabelCss>
            <TypesDiv>
              <select name="type1" id="type1" value={pokemonData.type1 || "0"} onChange={inputHandler}>
                <option value="0" disabled>Type 1</option>
                {loadingTypes ? null : typesList.map(type => (
                  type.id < 20 ?
                    <option value={type.id} key={type.id}>{type.name}</option>
                    : null
                ))}

              </select>
              <select name="type2" id="type2" value={pokemonData.type2} onChange={inputHandler}>
                <option value="">Type 2</option>
                {loadingTypes ? null : typesList.map(type => (
                  type.id < 20 ?
                    <option value={type.id} key={type.id}>{type.name}</option>
                    : null
                ))}
              </select>
            </TypesDiv>
          </FormControlCss>
          <FormButton type="submit">{loadingResponse ? "Saving..." : "Save Pokemon"}</FormButton>
        </div>
      </FormSplitterCss>
      <BackgroundImg src="/pkbll.png"/>
    </NewPokemonCss >
  );
}

export default NewPokemon;