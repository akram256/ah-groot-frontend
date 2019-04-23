import React, { Component } from 'react'
import Rating from '../components/Rating';
import { userRating } from '../actions/ratingActions';
import { connect } from 'react-redux';

export class RatingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  onSubmit = () => {
    const slug = this.props.slug
    const ratingData = {
      article: {
        score: this.state.rating
      }
    };
    this.props.userRating(ratingData, slug);
  };

  render() {
    const { rating } = this.state;
    return (
      <div>

        <Rating
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
          rating={rating}
          onSubmit={this.onSubmit}
        />

      </div>
    )
  }
}
export const mapStateToProps = (state) => {
   /* istanbul ignore next */
  return { ratingReducer: state.ratingReducer }
};
export default connect(mapStateToProps, { userRating })(RatingContainer);
