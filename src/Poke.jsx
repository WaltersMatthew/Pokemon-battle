import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Poke() {
    const [pokeData, setPokeData] = useState();
    const { id } = useParams();

    const capitalizer = (name) => name[0].toUpperCase() + name.slice(1);

    useEffect(() => {
        async function fetchAndLogPokemonData(pokeId) {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokeId}`
                );
                const data = await response.json();
                setPokeData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAndLogPokemonData(id);
    }, [id]);

    const abilityMap =
        pokeData &&
        pokeData.abilities.map((ability) => {
            return <li key={ability.slot}>{ability.ability.name}</li>;
        });

    const statMap = {};

    return (
        <div>
            <h1>one poke</h1>
            <h1>{pokeData && capitalizer(pokeData.name)}</h1>
            <img
                src={pokeData && pokeData.sprites.front_default}
                height="200px"
                alt={pokeData && pokeData.name}
            />
            <ul>{abilityMap}</ul>
        </div>
    );
}

export default Poke;
