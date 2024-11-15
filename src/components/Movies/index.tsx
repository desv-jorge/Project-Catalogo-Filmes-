"use client"
import axios from "axios"
import MovieCards from "../MovieCards"
import Navbar from "../Navbar"
import "./index.scss"
import { Movie } from "@/Types/movie";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const MOVIES_PER_PAGE = 4

function Movies (){
    const [movies, setMovies] = useState<Movie[]>([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        GetMovies();
      }, []);

    const GetMovies = ()=> {
        setLoading(true)
        axios({
        method: "get",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
            api_key: "5bf4e2f8a052c86673305a48abc2f01c",
            language: "pt-BR",
        }
    }).then((res)=>{
        console.log(res.data.results)
        setMovies(res.data.results)
        setTotalPages(Math.ceil(res.data.results.length / MOVIES_PER_PAGE));
        setCurrentPage(1);
    }).catch((err)=> console.log(err, "algum erro na requisição")
    ).finally(()=> setLoading(false))};

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const indexOfLastMovie = currentPage * MOVIES_PER_PAGE;
    const indexOfFirstMovie = indexOfLastMovie - MOVIES_PER_PAGE;
    const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (hasSearched) {
      if (searchTerm === "") {
        setMessage("Digite no campo de pesquisa para prosseguir");
        setTimeout(() => setMessage(""), 3000); 
      } else if (filteredMovies.length === 0) {
        setMessage("Nenhum resultado encontrado");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("");
      }
    }

    setTotalPages(Math.ceil(filteredMovies.length / MOVIES_PER_PAGE));
    setCurrentPage(1); 
  }, [searchTerm, movies, filteredMovies.length, hasSearched]);
    
      const handleSearch = (term: string) => {
        setSearchTerm(term);
        setHasSearched(true); 
      };
    return (
        <>
        <Navbar setSearchTerm={handleSearch} />

        <ul className="movie-list">
        {loading ? (
          <div className="loading">
            <FaSpinner className="spinner" /> Carregando filmes...
          </div>
        ) : (
          currentMovies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} loading={loading} /> 
          ))
        )}
      </ul>
      {message && <div className="message">{message}</div>}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </div>
        </>
    )
}

export default Movies