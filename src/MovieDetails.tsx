import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";

interface Movie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  runtime: number;
  genres: { name: string }[];
  vote_average: number;
  imdb_id: string;
  overview: string;
  production_companies?: { name: string }[];
  spoken_languages?: { name: string }[];
}
const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
 const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8ece0db0fabe683f10cbd7f8364e1a25&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div
      className="relative bg-black text-white min-h-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start p-8 gap-8">
        <div className="w-72 flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold">
            {movie.title}{" "}
            <span className="text-gray-400">
              ({new Date(movie.release_date).getFullYear()})
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-2 text-gray-300">
            <span>{movie.release_date}</span>
            <span>{movie.runtime} mins</span>
            <span>{movie.genres.map((g) => g.name).join(", ")}</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-16">
              <CircularProgressBar value={movie.vote_average} />
            </div>
            <span className="text-xl">User Score</span>
                  </div>
        <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            onClick={() => window.open(`https://www.imdb.com/title/${movie.imdb_id}`, "_blank", "noopener,noreferrer")}
            >
            View on IMDb
        </button>

          <h2 className="text-2xl font-semibold mt-6">Overview</h2>
          <p className="text-gray-200 mt-2">{movie.overview}</p>

          <div className="mt-6">
            <p>
              <span className="font-semibold">Director: </span>
              {movie.production_companies?.[0]?.name || "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Writer: </span>
              {movie.spoken_languages?.map((lang) => lang.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
