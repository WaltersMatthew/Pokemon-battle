import { useEffect } from "react";
import "./css/Pokecard.css";

export default function Pokecard(props) {
    const urlFixer = (id) => (id < 100 ? `00${id}`.slice(-3) : id);
    const capitalizer = (name) => name[0].toUpperCase() + name.slice(1);

    return (
        <div className={`${props.type} card`} key={props.id}>
            <h1>{capitalizer(props.name)}</h1>
            <div className="pokecard-image">
                <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlFixer(
                        props.id
                    )}.png`}
                    alt={props.name}
                />
            </div>
            <p>Type: {capitalizer(props.type)}</p>
            <p>Exp: {props.base_experience}</p>
        </div>
    );
}
