export default function Pokecard(props){
    
    const urlFixer = (id) => {
        if(id < 10) id = `00${id}`
        else if(id < 100)  id = `0${id}`
        return id
    }

    return(
            <div className={props.type}>
                <h1>{props.name}</h1>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlFixer(props.id)}.png`} alt={props.name} />
                <p>Type: {props.type}</p>
                <p>base experience: {props.base_experience}</p>
            </div>

    )
}