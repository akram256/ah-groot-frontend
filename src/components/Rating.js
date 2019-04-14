import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Rating = props => {
  return (
    <div>

  <a className="ratingButton waves-effect waves-light btn modal-trigger" href="#modal1">Rate</a>

  <div id="modal1" className="modal">
    <div className="modal-content">
   
        <React.Fragment>
          <h5 className="rateHeading">Your rating: {props.rating}</h5>
          <StarRatingComponent
            name={props.name}
            starCount={props.starCount}
            value={props.value}
            onStarClick={props.onStarClick}
          />
        </React.Fragment>
  
    </div>
    <div className="modal-footer">
      <button className="submitButton btn waves-effect waves-light"><a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={props.onSubmit}>SUBMIT <i className="material-icons right">send</i></a>  </button>
    </div>
  </div>
    </div>
  );
};

export default Rating;
