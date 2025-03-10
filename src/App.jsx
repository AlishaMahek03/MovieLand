import { useState , useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './component/MovieCard'
//API KEY:  35ace57a
function App() {
  const [movies, setmovies] = useState([])
  const [search_term, setsearch_term] = useState("")

  

  const API_URL = 'http://www.omdbapi.com?apikey=35ace57a';

  const search_movies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setmovies(data.Search)
  }

  useEffect(()=>{
    search_movies()
  }, [])

  return (
    <div className='app'>
        <h1>MOVIE LAND</h1>

        <div className="search">
          <input type="text" placeholder='Search for Movies...' value={search_term} onChange={(e)=>{setsearch_term(e.target.value)}}/>
          <img src={SearchIcon} alt="search" onClick={()=>{search_movies(search_term)}}/>
        </div>

        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  )
}

export default App
