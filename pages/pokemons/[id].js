const Pokemon = ({data})=>{
    console.log(data)
    return (
        <p>la</p>
    )
}

export default Pokemon
// dinamic route
export const getServerSideProps = async ({params}) =>{
    console.log(params)
    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return {props:{data}}
}