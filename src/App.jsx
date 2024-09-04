import { useState } from "react"
import data from "./Movies.json"
import MovieList from "./component/MovieList/MovieList"
import Filter from "./component/Filter/Filter";
import  "./App.css"
import AddMovie from "./component/AddMovie/AddMovie";

export default function App() {
  const [add,setAdd]=useState(false)
  const [movies,setMovies]=useState(data)
  const handleFilter = (titleFilter, ratingFilter) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating == ratingFilter 
      );
    });
    setMovies(filteredMovies);
  };
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    
};
 
  return (
    <div>
      {/* add a movie to movies list */}
       {!add?
      (<button className="btn" onClick={()=>setAdd(true)}>Add Movie</button>)
     :
       ( <div><button className="btn" onClick={()=>setAdd(false)}>Close </button> <AddMovie AddMovie={addMovie}/>
        </div>)
      }
      {/* filter movie */}
      <Filter Filter={handleFilter} />
      {/* display movies */}
      <MovieList movies={movies}  />
    </div>
  )
}
