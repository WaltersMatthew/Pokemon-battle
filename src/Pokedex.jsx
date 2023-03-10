import './css/Pokedex.css'
import Pokecard from "./Pokecard"


export default function Pokedex({pokemon, totalExp}){

    const playerMap = pokemon.map(p => {
        return (
            <Pokecard key={p.id} id={p.id} name = {p.name} type = {p.type} base_experience={p.base_experience} />
        )
    })
    return(
    <>        
        <h2>Total Exp: {totalExp}</h2>
        <div className="pokedex">{playerMap}</div>
       
        {/* <h2>Total Points: {handTwoTotal}</h2> */}
    </>
    )
}