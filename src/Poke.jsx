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

    const statMap =
        pokeData &&
        pokeData.stats.map((stat) => {
            return (
                <li key={stat.stat.url}>
                    {stat.stat.name}: {stat.base_stat}
                </li>
            );
        });

    const typeMap =
        pokeData &&
        pokeData.types.map((type) => {
            return <p key={type.type.url}>{capitalizer(type.type.name)}</p>;
        });

    return (
        <div>
            <h1>{pokeData && capitalizer(pokeData.name)}</h1>
            <div className="types">
                <h2>{typeMap}</h2>
            </div>
            <div className="height-weight">
                <p>Height: {pokeData && pokeData.height * 10}cm</p>
                <p>Weight: {pokeData && pokeData.weight / 10}kg</p>
            </div>
            <div className="sprites">
                <h1>Various Sprites</h1>
                <img
                    src={pokeData && pokeData.sprites.front_default}
                    height="200px"
                    alt={pokeData && pokeData.name}
                />
                <img
                    src={pokeData && pokeData.sprites.back_default}
                    height="200px"
                    alt={pokeData && pokeData.name}
                />
                <img
                    src={pokeData && pokeData.sprites.other.home.front_default}
                    height="200px"
                    alt={pokeData && pokeData.name}
                />
                <img
                    src={
                        pokeData &&
                        pokeData.sprites.other["official-artwork"].front_default
                    }
                    height="200px"
                    alt={pokeData && pokeData.name}
                />
                <img
                    src={
                        pokeData &&
                        pokeData.sprites.other.dream_world.front_default
                    }
                    height="200px"
                    alt={pokeData && pokeData.name}
                />
            </div>
            <div className="stats">
                <ul>{statMap}</ul>
            </div>
            <div className="abilities">
                <ul>{abilityMap}</ul>
            </div>
        </div>
    );
}

export default Poke;
