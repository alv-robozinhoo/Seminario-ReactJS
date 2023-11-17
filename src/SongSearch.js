import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Crie os componentes estilizados
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 35px 10px 0px;
  text-align: left;

  li {
    margin-bottom: 5px;
  }
`;

const SongSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);

  const searchSongs = async () => {
    try {
      const response = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTerm}&api_key=a438490b7d794a9a5bf5804135a525e3&format=json&limit=10`
      );
      setSongs(response.data.results.trackmatches.track);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSongs([]);
  };

  return (
    <SearchContainer>
      <StyledInput
        type="text"
        placeholder="Search for songs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ButtonRow>
        <StyledButton onClick={searchSongs}>Search</StyledButton>
        <ClearButton onClick={clearSearch}>Clear</ClearButton>
      </ButtonRow>

      <SongList>
        {songs.map((song) => (
          <li key={song.name}>{song.name} by {song.artist}</li>
        ))}
      </SongList>
    </SearchContainer>
  );
};

export default SongSearch;
