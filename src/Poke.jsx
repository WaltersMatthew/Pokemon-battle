import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Poke.css";
import "./css/Pokecard.css";
function Poke() {
    const [pokeData, setPokeData] = useState();

    const { id } = useParams();

    console.log(id);
    // util function to capitalize first letter
    const capitalizer = (name) => name[0].toUpperCase() + name.slice(1);

    //fetch Pokemon data when component mounts or ID param changes
    useEffect(() => {
        async function fetchPokemonData(pokeId) {
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
        fetchPokemonData(id);
    }, [id]);

    const abilityMap =
        pokeData &&
        pokeData.abilities.map((ability) => {
            return <p key={ability.slot}>{ability.ability.name}</p>;
        });

    const statMap =
        pokeData &&
        pokeData.stats.map((stat) => {
            return (
                <p key={stat.stat.url}>
                    {capitalizer(stat.stat.name)}: {stat.base_stat}
                </p>
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
            <div>
                <div className="types">{typeMap}</div>
                <div className="height-weight">
                    {/* multiply by 10 to get from decimeters to centimeters */}
                    <p>Height: {pokeData && pokeData.height * 10}cm</p>
                    {/* divide by 10 to get from decigrams to kilograms */}
                    <p>Weight: {pokeData && pokeData.weight / 10}kg</p>
                </div>
            </div>
            <div
                className={`sprites ${pokeData && pokeData.types[0].type.name}`}
            >
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
            <div className="stats-abilites">
                <div className="stats">{statMap}</div>
                <div className="abilities">
                    <h2>Special Abilites</h2>
                    {abilityMap}
                </div>
            </div>
        </div>
    );
}

export default Poke;
