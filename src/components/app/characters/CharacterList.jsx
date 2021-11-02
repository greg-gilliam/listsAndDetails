import React from 'react';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterList = characters.map((character) => (
    <li key={character.id}>
      <Character
        species={character.species}
        name={character.name}
        status={character.status}
        image={character.image}
      />
    </li>
  ));
  return <ul>{characterList}</ul>;
};

export default CharacterList;
