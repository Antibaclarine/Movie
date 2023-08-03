import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/authentication /${movieId}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className='productdetails'>
      
      <div>
        <img src={movie.thumbnail} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
        <p>{movie.rate}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
