import Pokecard from "./Pokecard"

const data = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 43, name: 'Oddish', type: 'grass', base_experience: 64},
    {id: 52, name: 'Meowth', type: 'normal', base_experience: 58},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 125, name: 'Electabuzz', type: 'electric', base_experience: 172},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
    {id: 143, name: 'Snorlax', type: 'normal', base_experience: 189}
  ]

const pokeMap = data.map(item =>{
    return (
        <Pokecard
            key={item.id}
            className={item.type}
            id = {item.id}
            name = {item.name}
            type= {item.type}
            base_experience = {item.base_experience}
        />
    )
}
)
export default function Pokedex(){
    return(
    <>
        <h1>Pokedex</h1>
        <div className="card-block">{pokeMap}</div>
    </>
    )
}