import Movie from './components/Movie';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import {useEffect, useState} from 'react';


const AppContainer = styled.div`
display : flex;
flex-wrap: wrap;
justify-content: center;
`;
const GlobalStyle = createGlobalStyle`
body{
  background-color: #262952;
}
`;

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/top_rated',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmQ5MDEwNDZhMWU5ZGRhODllMzVlNTI0ZjVmNzJjYiIsInN1YiI6IjY2MmRjYWE1YzNhYTNmMDEyNmZkMjBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bh1w30N9HLx3lEP4TBBITbd4lCCzFXzK89gdG0Xblw4'
  }
};

const App = () =>{
  const [movies, setMovies] = useState({ results: [] });

  useEffect(() => {
    const fetchMovies = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setMovies(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    fetchMovies();
  }, []);
        
    return (
      <div>
        <GlobalStyle />
        <div>
          <AppContainer>
            {movies.results.map((item) => {
              return (
                <Movie
                  key={item.id}
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}
                />
              );
            })}
          </AppContainer>
        </div>
    </div>
    );
  }
  
  

export default App;