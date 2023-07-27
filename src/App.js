// import logo from './logo.svg';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import MoviesList from './components/MovieList';
import Navigationbar from './Navbar';
import Carousels from './Caurosel';
function App() {
  return (
    <div>
      <Navigationbar/>
      <Carousels/>
     <MoviesList/>
    </div>
  );
}

export default App;
