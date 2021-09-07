import React from 'react'
import { useRouteMatch } from 'react-router-dom'


function Description({movies}) {
    const match=useRouteMatch()
    console.log(match.url.slice(1))
    const movie=movies.filter(el=>el.title==match.url.slice(1))
    console.log(movie)
    return (
        <div className="des">
         <div style={{color:"white",background:"blue"}} >{ movie[0].title }</div> 
          <br/>
         <div>{  movie[0].description}</div> 
        </div>
    )
}

export default Description;
