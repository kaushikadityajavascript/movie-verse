import MovieCard from "./MovieCard"; 
interface Movie {
  id: number; 
  title: string;
  poster_path?: string;
  vote_average: number;
  release_date: string;
}
interface SectionProps {
  title: string;
 movies: Movie[];
}
const Section:React.FC<SectionProps> = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide" >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
