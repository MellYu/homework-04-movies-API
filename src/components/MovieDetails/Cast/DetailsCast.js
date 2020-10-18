import React, { Component } from "react";
import moviesApi from "./../../../API/getFromApi.js";
import styles from './cast.module.css';

export default class DetailsCast extends Component {
  state = {
    detailsCast: [],
  };

  componentDidMount() {
    moviesApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ detailsCast: cast.cast }));
  }


  render() {
    const { detailsCast } = this.state;
    return (
      <div className={styles.container}>
        {detailsCast && detailsCast.length > 0 ? (
          <ul className={styles.cast_list}>
            {detailsCast.map((actor) => (
              <li className={styles.actor} key={actor.cast_id}>
                <img className={styles.actor_img} src={`${moviesApi.imgUrl}${actor.profile_path}`} alt={actor.name} />
                <p className={styles.actor_name}>{actor.name}</p>
                <p className={styles.actor_character}>{actor.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>We don't have information about cast</div>
        )}
      </div>
    );
  }
}
