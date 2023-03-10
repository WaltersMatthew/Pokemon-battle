import './css/Pokecard.css'

export default function Pokecard(props){
    
    const urlFixer = (id) => id < 100 ? `00${id}`.slice(-3) : id

    return(
            <div className={props.type} key={props.id}>
                <h1>{props.name}</h1>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlFixer(props.id)}.png`} alt={props.name} />
                <p>Type: {props.type}</p>
                <p>base experience: {props.base_experience}</p>
            </div>

    )
}