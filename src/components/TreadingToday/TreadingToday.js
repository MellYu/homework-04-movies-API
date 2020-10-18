import React, { Component } from "react";
import { Link } from "react-router-dom";
import moviesApi from "./../../API/getFromApi.js";
import styles from "./treading.module.css";

class TreadingToday extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi
      .fetchTopDayMovies()
      .then((movies) => this.setState({ movies: movies.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <section className={styles.container}>
        <h1 className={styles.treading_title}>Treading today</h1>
        {movies.length > 0 && (
          <ul className={styles.movies_list}>
            {movies.map((movie) => (
              <li key={movie.id} className={styles.movie_list__item}>
                <Link
                  className={styles.movie_list__item__link}
                  to={`movies/${movie.id}`}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default TreadingToday;
