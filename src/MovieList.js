import React,{useState} from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

const MovieList = ({movies,addMovie}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <div style={{display:"flex",justifyContent:"space-around"}}> 
        {movies.map((el,i) =>( 
            <MovieCard movie={el} key={i}/>))} 
        </div>
        <div>
            <p onClick={handleShow}>+</p>
            <AddMovie handleClose={handleClose} show={show} addMovie={addMovie}/>
        </div>
        </div>
    )
}

export default MovieList
