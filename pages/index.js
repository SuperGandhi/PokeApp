const Pokemon = ({pokemon}) =>{
  return (
    <li>{pokemon.name}</li>
  )
}

export default function Pokemons({pokemons}) {

  return (
    <div>
      <p>Pokemons</p>
      <ul>
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
      </ul>
    </div>
  )
}

export const getStaticProps =  async () =>{
  const response = await  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return {
    props: {pokemons: data.results}
  }
}