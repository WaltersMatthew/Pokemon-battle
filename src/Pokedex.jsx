import './css/Pokedex.css'
import Pokecard from "./Pokecard"


export default function Pokedex(props){

    const playerMap = props.pokemon.map(p => {
        return (
            <Pokecard key={p.id+p.name} id={p.id} name = {p.name} type = {p.types[0].type.name} base_experience={p.base_experience} />
        )
    })
    return(
    <>        
        <h2>Total Exp: {props.totalExp}</h2>
        <div className="pokedex">{playerMap}</div>
    </>
    )
}