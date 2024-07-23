import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import Modal from './components/Modal';
import Loader from './components/Loader';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.response) {
          setError(`Error: ${err.response.status} ${err.response.statusText}`);
        } else if (err.request) {
          setError('Error: No response from server. Please try again later.');
        } else {
          setError(`Error: ${err.message}`);
        }
      }
    };

    fetchCharacters();
  }, [page]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} onClick={handleCardClick} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {selectedCharacter && <Modal character={selectedCharacter} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
