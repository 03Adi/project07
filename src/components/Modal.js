import React from 'react';

const Modal = ({ character, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{character.name}</h2>
        <p>Height: {character.height} meters</p>
        <p>Mass: {character.mass} kg</p>
        <p>Date Added: {new Date(character.created).toLocaleDateString('en-GB')}</p>
        <p>Number of Films: {character.films.length}</p>
        <p>Birth Year: {character.birth_year}</p>
      </div>
    </div>
  );
};

export default Modal;
