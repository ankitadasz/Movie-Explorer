import { NavLink } from "react-router-dom";

export const Card = ({movie}) =>{
    const {poster_path,id,title} = movie;
    return(
        <div>
            <img 
             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}/>
        <h3>{title}</h3>
        <NavLink to= {`/Explore/${id}`}>
            <button>
                Watch Review
            </button>
        </NavLink>
            
        </div>
    )
}