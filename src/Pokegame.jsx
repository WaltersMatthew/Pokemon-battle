import Pokedex from "./Pokedex"

const data = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 43, name: 'Oddish', type: 'grass', base_experience: 64},
    {id: 52, name: 'Meowth', type: 'normal', base_experience: 58},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 125, name: 'Electabuzz', type: 'electric', base_experience: 172},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
    {id: 143, name: 'Snorlax', type: 'normal', base_experience: 189}
]

export default function Pokegame() {
   let handOne = []
   let handTwo = []
    // function to get random data from array with no repeats
   function randomNoRepeats(array) {
        let copy = array.slice(0);
        return function() {
            if (copy.length < 1) { copy = array.slice(0); }
            let index = Math.floor(Math.random() * copy.length);
            let item = copy[index];
            copy.splice(index, 1);
            return item;
        };
  }
  // calling the function on the pokemon array
  const chooser = randomNoRepeats(data)
  // loop and push into the two hands
  for(let i = 0; i <= 7; i++){
    if(i%2) handOne.push(chooser())
    else handTwo.push(chooser())
  }
  
  let exp1 = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  let exp2 = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)


    const winnerText = (
        <>
            <h1 style={{color: 'gold', fontSize: '5rem', marginBottom: "-30px"}}> 
                <img src="/pokeball.png" alt="pokeball" height={100} />
                    Winner!
                <img src="/pokeball.png" alt="pokeball" height={100}/>
            </h1>
        
        </>
    )
    
    return(
        <div>
            {exp1 > exp2 ? winnerText : <h1>Player One</h1>}
            <Pokedex pokemon={handOne} totalExp = {exp1}/>
            {exp2 > exp1 ? winnerText : <h1>Player Two</h1>}
            <Pokedex pokemon={handTwo} totalExp = {exp2}/>
        </div>
    )
}