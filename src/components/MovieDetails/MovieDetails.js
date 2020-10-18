import React, { Component, lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import moviesApi from "./../../API/getFromApi.js";
import routes from "./../../routes.js";
import styles from "./movieDetail.module.css";

const DetailsCast = lazy(() =>
  import("./Cast/DetailsCast.js" /*webpackChunkName: "Cast" */)
);
const DetailsReview = lazy(() =>
  import("./Review/DetailsReview.js" /*webpackChunkName: 'Reviews' */)
);
export default class MovieDetails extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    moviesApi
      .fetchMovieById(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }));
  }

  handleBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.home);
  };

  render() {
    const { movie } = this.state;
    const fromState = this.props.location.state;
    return (
      <section className={styles.container}>
        {movie && (
          <>
            <button
              className={styles.back_btn}
              type="button"
              onClick={this.handleBack}
            >
              Go back
            </button>
            <div className={styles.movie_container}>
              <img
                className={styles.movie_img}
                src={`${moviesApi.imgUrl}${movie.poster_path}`}
                alt={movie.title}
              />

              <div>
                <h1>
                  {movie.title} ({movie.release_date.substr(0, 4)})
                </h1>
                <p>User Score: {movie.vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className={styles.add_info}>Additional information</h2>
              <ul className={styles.add_info__list}>
                <li>
                  <Link
                    className={styles.add_info__link}
                    to={{
                      pathname:`/movies/${this.props.match.params.movieId}/cast`,
                      state: fromState,
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.add_info__link}
                    to={{
                      pathname:`/movies/${this.props.match.params.movieId}/review`,
                      state: fromState,
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              <Suspense fallback={<h1>Loadind...</h1>}>
                <Switch>
                  <Route path={routes.movieCast} component={DetailsCast} />
                  <Route path={routes.movieRewiew} component={DetailsReview} />
                </Switch>
              </Suspense>
            </div>
          </>
        )}
      </section>
    );
  }
}
