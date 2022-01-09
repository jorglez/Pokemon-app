import Card from "./Card";
import { useEffect, useState } from "react";
import { CardsContainerCss, CardsGridCss } from "../styles/CardsContainerCss";
import { useDispatch, useSelector } from "react-redux";

import Loading from "./Loading";


const NameSearchResults = () => {

  //redux related functions for pokemon list - funciones de redux para lista de pokemon
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.searchPokemonReducer)
  const list = useSelector(state => state.searchPokemonReducer.pokemonData)

  //get filterReducer params - obtiene parametros del filterReducer
  const { pokemonType, source } = useSelector(state => state.filterReducer)

  //get sortReducer params - obtiene parametros del sortReducer
  const { sortBy } = useSelector(state => state.sortReducer)

  //saves original list and changes made by filters - guarda lista original y cambios de filtros
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    // Consultar api


    // manages filter by source - maneja filtrado por origen
    const filterListFunc = (source, type = "") => {
      if (source === "both") {
        if (type !== "") {
          let temp = []
          list.forEach(pk => {
            pk.types.forEach(currType => {
              //console.log(pk.name, " ", currType)
              if (currType !== null && currType.name === type)
                temp.push(pk)
            })
          })
          return setFilteredList(temp)
        }
        return setFilteredList(list)
      }

      if (source === "mine") {
        if (type !== "") {
          let temp = []
          list.forEach(pk => {
            pk.types.forEach(currType => {
              //console.log(pk.name, " ", currType)
              if (currType !== null && currType.name === type && typeof pk.id === "string")
                temp.push(pk)
            })
          })
          return setFilteredList(temp)
        }
        return setFilteredList([...list].filter(pk => typeof pk.id === "string"))
      }

      if (source === "api") {
        if (type !== "") {
          let temp = []
          list.forEach(pk => {
            pk.types.forEach(currType => {
              //console.log(pk.name, " ", currType)
              if (currType !== null && currType.name === type && typeof pk.id === "number")
                temp.push(pk)
            })
          })
          return setFilteredList(temp)
        }
        return setFilteredList(list.filter(pk => typeof pk.id === "number"))
      }

    }


    filterListFunc(source, pokemonType)

  }, [dispatch, list, pokemonType, source, sortBy])

  useEffect(() => {
    const sortList = param => {

      if(param ==="id"){
        let temp = [...filteredList].sort((a,b)=>{
          if(a.id > b.id) return 1
          if(a.id < b.id) return -1
          return 0
        })
        return setFilteredList(temp)
      }

      // sort() order the array from A to Z by default - sort ordena el array de A a Z por default
      if (param === "atoz") {
        //if modified directly, the component won't update, so a copy of the array is needed and then the new value is passed to the list state
        //el componente no se actualiza si la lista se modifica directamente, es necesario tomar una copia de la lista, modificarla y luego guardar el valor nuevo en el state
        let temp = [...filteredList].sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
        return setFilteredList(temp)
      }

      //same but < and > switch places - lo mismo pero < y > cambian de lugar
      if (param === "ztoa") {
        let temp = [...filteredList].sort((a, b) => {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
        return setFilteredList(temp)
      }

      if (param === "asc") {
        let temp = [...filteredList].sort((a, b) => {
          if (a.attack > b.attack) return 1
          if (a.attack < b.attack) return -1
          return 0
        })
        return setFilteredList(temp)
      }

      if (param === "desc") {
        let temp = [...filteredList].sort((a, b) => {
          if (a.attack < b.attack) return 1
          if (a.attack > b.attack) return -1
          return 0
        })
        return setFilteredList(temp)
      }
    }

    sortList(sortBy)
    //eslint-disable-next-line
  }, [sortBy])

  return (
    <CardsContainerCss>
      {filteredList.length === 0 ? <h1>No Results Found</h1> :<h1>Lite Dex</h1>}
      {!error ? //shows "not found" message if pkmn doesn't exists -muestra "not found" si el pokemon no existe
        <CardsGridCss>
          {loading ? <Loading /> : filteredList.map((pk, i) => (
            i < 12 ?
              <Card pokemon={pk} key={pk.id} />
              : <h2>Pokemon not Found</h2>
          ))}

        </CardsGridCss>
        : <h2>Pokemon not Found</h2>
      }

    </CardsContainerCss>
  );
}

export default NameSearchResults;