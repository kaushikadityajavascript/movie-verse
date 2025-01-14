import { useState, useEffect } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
import Section from "./Section";

interface Movie {
  title: string;
  id: number;
  poster_path?: string;
  overview?: string;
  vote_average: number;
  release_date: string;
}

const Body = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const fetchMovies = async () => {
    const trendingResponse = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=8ece0db0fabe683f10cbd7f8364e1a25"
    );
    const trendingData = await trendingResponse.json();
    setTrending(trendingData.results);

    const topRatedResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8ece0db0fabe683f10cbd7f8364e1a25&language=en-US&page=1"
    );
    const topRatedData = await topRatedResponse.json();
    setTopRated(topRatedData.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredMovies([]);
      return;
    }
    const allMovies = [...trending, ...topRated];
    const filtered = allMovies.filter((movie) =>
      movie?.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchText, trending, topRated]);

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition ||
      (window as any).webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent & { results: SpeechRecognitionResultList }) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="p-6">
      <div className="relative mb-6">
        <div className="flex items-center bg-white shadow-lg rounded-full w-full max-w-3xl mx-auto px-4 py-2">
          <input
            type="text"
            className="flex-grow text-gray-700 placeholder-gray-400 outline-none text-lg p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button
            onClick={handleVoiceInput}
            className="text-gray-600 hover:text-blue-500 transition-all p-2"
          >
            {isListening ? (
              <span className="animate-pulse">🎤</span>
            ) : (
              <span>🎙️</span>
            )}
          </button>
        </div>
      </div>
      {filteredMovies.length > 0 ? (
        <Section title="Search Results" movies={filteredMovies} />
      ) : (
        <>
          <Section title="Trending" movies={trending} />
          <Section title="Top Rated" movies={topRated} />
        </>
      )}
    </div>
  );
};

export default Body;
