export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await res.json();
  console.log('characters', characters.results);
  return characters.results;
};
