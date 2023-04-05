import { useEffect, useState } from "react";
import Pokedex from "./Pokedex";

export default function Pokegame() {
    const [poke, setPoke] = useState([]);
    const [handOne, setHandOne] = useState([]);
    const [handTwo, setHandTwo] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        function fetchKantoPokemon() {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
                .then((response) => response.json())
                .then(function (allpokemon) {
                    const pokemonPromises =
                        allpokemon.results.map(fetchPokemonData);
                    Promise.all(pokemonPromises).then((pokemonData) => {
                        setPoke(pokemonData);
                        setDataFetched(true);
                    });
                });
        }

        async function fetchPokemonData(pokemon) {
            let url = pokemon.url;
            try {
                const response = await fetch(url);
                const pokeData = await response.json();
                return pokeData;
            } catch (err) {
                return console.log(err);
            }
        }

        fetchKantoPokemon();
    }, []);

    useEffect(() => {
        if (poke.length > 0) {
            // function to get random data from array with no repeats
            function randomNoRepeats(array) {
                let copy = array.slice(0);
                let lastSelectedIndex = -1;

                return function () {
                    if (copy.length < 1) {
                        copy = array.slice(0);
                        lastSelectedIndex = -1;
                    }

                    let index;
                    let item;
                    do {
                        index = Math.floor(Math.random() * copy.length);
                        item = copy[index];
                    } while (index === lastSelectedIndex || !item);

                    copy.splice(index, 1);
                    lastSelectedIndex = index;
                    return item;
                };
            }

            // calling the function on the pokemon array
            function playGame() {
                const chooser = randomNoRepeats(poke);
                let tempHandOne = [];
                let tempHandTwo = [];
                for (let i = 0; i <= 7; i++) {
                    if (i % 2) {
                        tempHandOne.push(chooser());
                    } else {
                        tempHandTwo.push(chooser());
                    }
                }
                setHandOne(tempHandOne);
                setHandTwo(tempHandTwo);
            }

            if (dataFetched) {
                playGame();
            }
        }
    }, [poke, dataFetched]);

    const handleReset = () => {
        setHandOne([]);
        setHandTwo([]);

        function randomNoRepeats(array) {
            let copy = array.slice(0);
            let lastSelectedIndex = -1;

            return function () {
                if (copy.length < 1) {
                    copy = array.slice(0);
                    lastSelectedIndex = -1;
                }

                let index;
                let item;
                do {
                    index = Math.floor(Math.random() * copy.length);
                    item = copy[index];
                } while (index === lastSelectedIndex || !item);

                copy.splice(index, 1);
                lastSelectedIndex = index;
                return item;
            };
        }
        function playGame() {
            setDataFetched(false);
            const chooser = randomNoRepeats(poke);
            let tempHandOne = [];
            let tempHandTwo = [];
            for (let i = 0; i <= 7; i++) {
                if (i % 2) {
                    tempHandOne.push(chooser());
                } else {
                    tempHandTwo.push(chooser());
                }
            }
            setHandOne(tempHandOne);
            setHandTwo(tempHandTwo);
            setTimeout(() => {
                setDataFetched(true);
            }, 1000);
        }
        playGame();
    };

    // get total EXP for both hands
    let exp1 = handOne.reduce(
        (exp, pokemon) => exp + pokemon.base_experience,
        0
    );
    let exp2 = handTwo.reduce(
        (exp, pokemon) => exp + pokemon.base_experience,
        0
    );

    const winnerText = (
        <div className="winner">
            <h1
                style={{
                    color: "gold",
                    fontSize: "5rem",
                    marginBottom: "-30px",
                }}
            >
                <img
                    src="/pokeball.png"
                    alt="pokeball"
                    height={100}
                    style={{ marginBottom: "-20px" }}
                />
                Winner!
                <img
                    src="/pokeball.png"
                    alt="pokeball"
                    height={100}
                    style={{ marginBottom: "-20px" }}
                />
            </h1>
        </div>
    );

    const loadingText = (
        <h1 className="loading-text">Preparing for battle...</h1>
    );

    const gameBoard = (
        <div className="pokegame">
            <button onClick={handleReset}>Click here to battle again!</button>
            {exp1 > exp2 ? winnerText : <h1>Player One</h1>}
            <Pokedex pokemon={handOne} totalExp={exp1} />
            {exp2 > exp1 ? winnerText : <h1>Player Two</h1>}
            <Pokedex pokemon={handTwo} totalExp={exp2} />
            <button onClick={handleReset}>Click here to battle again!</button>
        </div>
    );

    return <>{dataFetched ? gameBoard : loadingText}</>;
}
