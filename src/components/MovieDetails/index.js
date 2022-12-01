import {component} from 'react'
import './index.css'

const MovieDetails=(props)=>{
const {movieDetails}=props
const {uniqueNo,poster,name,rating}=movieDetails

return (


<li className="bg-container">
    <img className="img play" src={poster} alt='poster' />
    <div className="details">
        <h1 className="heading">{name}</h1>
        <p>rating: {rating}</p>
    </div>
    
</li>

)



}
export default MovieDetails