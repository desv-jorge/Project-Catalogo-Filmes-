/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/Types/movie";
import "./index.scss"
import { FaSpinner } from "react-icons/fa";
import StarRating from "../StarRating";

export interface Props {
    movie: Movie;
    loading: boolean;
  }

  export default function MovieCard(props: Props) {
    const { movie, loading } = props;

    return (
      <li className="movie-card">
        {loading ? (
          <div className="loading">
            <FaSpinner className="spinner" />
          </div>
        ) : (
          <>
            <div className="movie-poster">
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </div>
  
            <div className="movie-infos">
              <p className="movie-title">{movie.title}</p>
              {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}
              <div className="hidden-content">
                {movie.overview && (
                  <p className="description">
                    {movie.overview.length > 350
                      ? `${movie.overview.substring(0, 350)}...`
                      : movie.overview}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </li>
    );
  }
  