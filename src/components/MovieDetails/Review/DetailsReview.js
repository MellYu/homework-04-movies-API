import React, { Component } from 'react';
import moviesApi from "./../../../API/getFromApi.js";

export default class DetailsReview extends Component{
state ={
    review: [],
}

componentDidMount() {
    moviesApi.fetchMovieReview(this.props.match.params.movieId).then(reviews => this.setState({ review: reviews.results }));
}

    render(){
        const {review} = this.state;
        return(
            <div>
                {review.length > 0 ? (
                <ul>
                    {review.map(reviewer => <li key={reviewer.id}>
                    <h4>Author: {reviewer.author}</h4>
                    <p>{reviewer.content}</p>
                    </li>)}
                </ul>
                ):(<div>We don't have any reviews for this movie</div>)}
            </div>
        )
    }
}