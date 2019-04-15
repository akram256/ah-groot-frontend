import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Rating = props => {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <div>
      {!isLoggedIn ? (
        <React.Fragment>
          <h2>Rating from state: {props.rating}</h2>
          <StarRatingComponent
            name={props.name}
            starCount={props.starCount}
            value={props.value}
            onStarClick={props.onStarClick}
          />
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
};

export default Rating;
