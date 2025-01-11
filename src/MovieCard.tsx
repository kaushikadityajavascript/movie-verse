import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router";

interface MovieCardProps {
  title: string;
  image: string;
  rating: number; 
  releaseDate: string;
  id: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, image, rating, releaseDate }) => {
  // console.log("id=========",id);
  return (
     <Link to={`/movie/${id}`}>
    <div className="flex flex-col items-center">
    <div className="w-44 flex-shrink-0 bg-gray-800 text-white rounded-lg shadow-md overflow-hidden relative">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        />
         {/* Circular Progress Bar  */}
      <div className="absolute top-5 left-2 w-10 h-16 text-white-bold">
          <CircularProgressbar
            value={rating} 
            text={`${Math.round(rating*10)}%`} 
            styles={buildStyles({
              textSize: "20px", 
              textColor: "#fff", 
              trailColor: "#22c55e", 
              pathColor: "#374151",
            })}
          />
        </div>
    </div>
       <div className="p-2">
         <h3 className="text-sm font-semibold truncate text-gray-700">{title}</h3>
        <p className="text-xs font-semibold text-gray-400">Release Date: {releaseDate}</p>
      </div>
      </div>
        </Link>
  );
};

export default MovieCard;
