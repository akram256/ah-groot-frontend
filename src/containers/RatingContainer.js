import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Rating from '../components/Rating';
import { userRating } from '../actions/ratingActions'
import { connect } from 'react-redux';
class RatingContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          rating: 0
        };
    }

    onStarClick(nextValue, prevValue, name){
      this.setState({rating: nextValue});
      // const slug = this.props.match.params.slug
      const slug = "demo-article"
      const ratingData = { 
        article: {
          score: this.state.rating
        }
      }
      this.props.userRating(ratingData, slug);
    }
    //we need an actual function that sends the average rating

  render() {
    const { rating } = this.state;

    return (
      <div>

        <Rating 
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          rating={rating} />

      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return { loading: state.ratingReducer }
}

export default connect(
  mapStateToProps,
  { userRating }
)(RatingContainer);