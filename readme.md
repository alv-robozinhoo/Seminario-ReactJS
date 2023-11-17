# ReactJS

## Introdução

Este guia apresenta o ReactJS, um framework JavaScript popular para o desenvolvimento de interfaces de usuário interativas. ReactJS é amplamente utilizado para criar single-page applications (SPAs) eficientes e escaláveis.

ReactJS resolve o problema da construção eficiente de interfaces do usuário por meio de um modelo de componentes reutilizáveis. Ele permite a construção de interfaces dinâmicas, facilita o gerenciamento do estado da aplicação e proporciona uma experiência de desenvolvimento mais declarativa.

## Instalação & Configuração

Para começar com o ReactJS, siga os passos abaixo:
1. **Instale o NodeJS e o NPM**
   ```bash
   sudo apt install  nodejs
   ```
   Ou usando o site oficial: https://nodejs.org/en/
   
3. **Crie um novo aplicativo React:**
   ```bash
   npx create-react-app my-app
   ```
4. **Vá até o diretório da sua aplicação:**
   ```bash
   cd my-app
   ```
5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
O ReactJS agora está instalado e em execução. Visite http://localhost:3000 para visualizar seu novo aplicativo.

## Getting Started

Para exemplificar as funcionalidades do ReactJS, faremos um simples mecanismo de busca usando a API do `Last.fm`
1. **Criando o APP:**
```bash
npx create-react-app top-10-songs
cd top-10-songs
```


2. **Instalando as dependências:**
   
Vamos instalar `axios`, uma biblioteca para fazer requisições HTTP, para buscar as músicas.
```bash
npm install axios
```


3. **Criando o Componente de Busca:**
   
Vamos criar um componente chamado `SongSearch.js` para lidar com a busca.

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const SongSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);

  const searchSongs = async () => {
    try {
      const response = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTerm}&api_key=YOUR_LASTFM_API_KEY&format=json&limit=10`
      );
      setSongs(response.data.results.trackmatches.track);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for songs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchSongs}>Search</button>

      <ul>
        {songs.map((song) => (
          <li key={song.name}>{song.name} by {song.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongSearch;
```


4. **Integrando a Busca no APP Principal:**
   
Vamos agora integrar este componente no `App.js`.
```jsx
import React from 'react';
import SongSearch from './SongSearch';

function App() {
  return (
    <div className="App">
      <h1>Top 10 Songs</h1>
      <SongSearch />
    </div>
  );
}

export default App;

```
Lembre-se de substituir `'YOUR_LASTFM_API_KEY'` com sua chave real da API do <i>Last.fm</i>.

## Frameworks Semelhantes

Além do React, há outros frameworks que são alternativas ou extensões do React. Vamos dar uma olhada em alguns deles:

### NextJS:
Next.js é um framework para React que facilita a criação de aplicativos React renderizados no lado do servidor. Ele simplifica a renderização no servidor, o roteamento e a pré-renderização.

**Exemplo de Página com Next.js:**
```jsx
// pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>Bem-vindo ao meu aplicativo Next.js!</p>
    </div>
  );
};

export default HomePage;
```

### Gatsby:
Gatsby é um framework que utiliza React para criar sites estáticos progressivos (PWA). Ele é amplamente usado para criar blogs, portfólios e sites de documentação.

**Exemplo de Página com Gatsby:**
```jsx
// src/pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Gatsby Site</h1>
      <p>Construa sites incríveis com Gatsby!</p>
    </div>
  );
};

export default HomePage;
```
Estes são apenas alguns exemplos, e a escolha depende das necessidades específicas do projeto. O React é altamente modular e pode ser combinado com diversas ferramentas e bibliotecas para atender aos requisitos do desenvolvimento web.


# Contribuidores

<i>

<table style="magrin-left: 40px;">
  <tr>
  <td align="center">
      <a href="https://github.com/rafaelrat/">
        <img src="https://imgs.search.brave.com/-6nnnKHsWW4K3fvJpTdDcHsB0TLVv4wT5V4heeqxu7A/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8w/OGE2NzVfMzMzYWU4/MDRmNzg1NDIxM2Fj/ZTM2YTMzYmFlMDli/YTB-bXYyLmpwZy92/MS9maXQvd18xMDAw/JTJDaF8xMDAwJTJD/YWxfYyUyQ3FfODAv/ZmlsZS5qcGc" width="100px;" alt=""/><br>
        <sub>
          <b>eustaquio</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alvimdev/">
        <img src="https://avatars.githubusercontent.com/u/83983141?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>alvim</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/raphhax/">
        <img src="https://avatars.githubusercontent.com/u/104567495?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>rapha</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
