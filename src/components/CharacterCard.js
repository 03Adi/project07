import React from 'react';

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <h2>{character.name}</h2>
    </div>
  );
};

export default CharacterCard;
