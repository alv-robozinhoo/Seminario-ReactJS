import React from 'react';
import styled from 'styled-components';
import SongSearch from './SongSearch';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px; /* ou qualquer largura máxima desejada */
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Card>
        <h1>Top 10 Songs</h1>
        <SongSearch />
      </Card>
    </AppContainer>
  );
}

export default App;
