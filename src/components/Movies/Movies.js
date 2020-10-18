import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import moviesApi from "./../../API/getFromApi.js";
import SearchForm from "./../Search/SearchForm.js";
import styles from "./movies.module.css";

export default class Movies extends Component {
  state = {
    moviesBySearch: [],
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);

    if (query) {
      moviesApi
        .fetchMovieBySearch(query)
        .then((search) => this.setState({ moviesBySearch: search.results }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);

    if (prevQuery !== nextQuery) {
      moviesApi
        .fetchMovieBySearch(nextQuery)
        .then((search) => this.setState({ moviesBySearch: search.results }));
    }
  }

  handleChangeSearchQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { moviesBySearch } = this.state;
    const { match, location } = this.props;
    return (
      <section className={styles.container}>
        <SearchForm
          onSubmit={this.handleChangeSearchQuery}
          onClick={this.handleChangeSearchQuery}
        />

        {moviesBySearch.length > 0 && (
          <ul className={styles.movies_list}>
            {moviesBySearch.map((movie) => (
              <li className={styles.movie_list__item} key={movie.id}>
                <Link
                  className={styles.movie_list__item__link}
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: location },
                  }}
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
