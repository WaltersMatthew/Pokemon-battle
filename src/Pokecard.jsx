export default function Pokecard(props){
    return(
            <div className={props.type}>
                <h1>{props.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name} />
                <p>Type: {props.type}</p>
                <p>base experience: {props.base_experience}</p>
            </div>

    )
}