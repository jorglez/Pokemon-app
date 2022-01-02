const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require("axios")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


//this function will manage every request for a single pokemon to the api
//esta funcion manejará cualquier búsqueda de 1 solo pokemon a la api
const pokemonSearch = async param => {

  try {
    const rawData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
    const { data } = rawData

    const pokemonInfo = {
      name: data.name,
      id: data.id,
      img: data.sprites.other["official-artwork"].front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      types: [
        { name: data.types[0].type.name },
        data.types[1] ? { name: data.types[1].type.name } : null
      ]
    }
    return pokemonInfo
  } catch (error) {
    console.log(error)
  }

}

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {

  //checks if my table is filled already 
  // checa que mi tabla tenga algo
  let TypesFilled = await Type.findAll()

  //if it's empty, requests the info from pokeapi to paste it in my table
  //si está vacía, pide la info desde pokeapi para copiarla en mi tabla
  if (TypesFilled.length === 0) {
    try {
      const typesFromApi = await axios.get("https://pokeapi.co/api/v2/type")
      const toDB = typesFromApi.data.results

      //takes name and id from each type to make sure my table matches id too
      //copia nombre e id de cada tipo para que coincidan mi tabla y la api
      toDB.forEach(t => {

        let name = t.name
        let id = t.url.split("/")[6]

        Type.create({ name, id })
      })
      return res.json({ msg: "Datos copiados a la base exitosamente" })
    } catch (error) {
      res.send("no se copiaron los datos a la base")
    }

  } else {
    res.send("ya tiene algo")
  }
})


router.get('/pokemons', async (req, res) => {

  //checks if there's a query before making the 40 pokemon list request
  //Checa si hay query antes de pedir la lista de 40 pokemon
  if (req.query.name) {
    try {
      let { name } = req.query
      let apiPokemon = await pokemonSearch(name)
      let localData = await Pokemon.findAll({ where: { name }, include: Type })
      //concat arrays so theres a single array to iterate
      //concatenar arreglos para tener uno solo en el cual iterar
      let results = localData.concat(apiPokemon)
      return res.json(results)
    } catch (error) {
      console.log(error)
      // return res.status(404).json({ msg: "Pokemon not found" })
    }

  }

  try {
    //fetches data from my DB - toma datos desde mi DB
    const localList = await Pokemon.findAll({ include: Type })

    //array will save up to 40 pokemon - arreglo que guarda hasta 40 pokemon
    const pokeApiArr = []
    for (let i = 1; i <= 40; i++) {
      pokeApiArr.push(await pokemonSearch(i))
    }

    const fullList = localList.concat(pokeApiArr)

    return res.json(fullList)

  } catch (error) {
    console.log(error)
    res.status(404).json({ msg: "pokemon not found" })
  }


})


router.get('/pokemons/:id', async (req, res) => {
  const { id } = req.params

  try {
    let pokemon = {}
  if (id.length > 3) {
    pokemon = await Pokemon.findOne({where: {id}, include: Type})

    return res.json(pokemon)
  }

  pokemon = await pokemonSearch(id)

  res.json(pokemon)
  } catch (error) {
    console.log(error)
    res.status(404).json({msg: "Pokemon not found"})
  }
  
})


router.get('/types', async (req, res) => {
  try {
    let localData = await Type.findAll()
    return res.json(localData)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "Type fetching error" })
  }

})


router.post("/pokemons", async (req, res) => {

  let { name, hp, attack, defense, speed, height, weight, type1, type2, img } = req.body

  if (name) {
    try {
      const newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img
      })
      type1 && type2 ? newPokemon.addTypes([type1, type2]) : newPokemon.addType(type1)
      res.json({ msg: "Pokemon saved succesfully" })
    } catch (error) {
      console.log(error)
      res.json({ msg: error })
    }
  }

})


module.exports = router;
