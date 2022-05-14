import Link from 'next/Link'

const Pokemon = ({pokemon}) =>{
  const id= pokemon.url.split('/').filter(x => x).pop()
  return (
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
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

// properties statics

export const getStaticProps =  async () =>{
  const response = await  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return {
    props: {pokemons: data.results}
  }
}