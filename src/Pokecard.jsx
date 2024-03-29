import { Link } from "react-router-dom";
import "./css/Pokecard.css";

export default function Pokecard(props) {
    //only need this function if calling the assets.pokemon for high quality sprites. Not if usings the gifs.
    // const urlFixer = (id) => (id < 100 ? `00${id}`.slice(-3) : id);

    const capitalizer = (name) => name[0].toUpperCase() + name.slice(1);

    return (
        <div className={`${props.type} card`} key={props.id}>
            <h1>{capitalizer(props.name)}</h1>
            <div className="pokecard-image">
                <Link to={`/${props.id}`}>
                    <img
                        // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlFixer(
                        //     props.id
                        // )}.png`}
                        src={`https://play.pokemonshowdown.com/sprites/ani/${props.name}.gif`}
                        alt={props.name}
                    />
                </Link>
            </div>
            <p>Type: {capitalizer(props.type)}</p>
            <p>Exp: {props.base_experience}</p>
        </div>
    );
}
