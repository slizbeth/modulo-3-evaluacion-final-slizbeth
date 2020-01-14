const ENDPOINT = 'https://rickandmortyapi.com/api/character/';
// const SINGLECHARACTER = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => fetch(ENDPOINT).then(response => response.json());
//const fetchIdCharacter = (id) => fetch(SINGLECHARACTER+id).then(response => response.json());
export { fetchCharacters};