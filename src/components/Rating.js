import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import 'materialize-css/dist/js/materialize.js';

const Rating = props => {
  const isLoggedIn = sessionStorage.getItem('token');
  return (
    <div>

  <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Rate</a>

  <div id="modal1" className="modal">
    <div className="modal-content">
    {!isLoggedIn ? (
        <React.Fragment>
          <h5 className="rateHeading">Your rate: {props.rating}</h5>
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
    <div className="modal-footer">
      <button className="indigo darken-4 btn waves-effect waves-light"><a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={props.onSubmit}>SUBMIT <i className="material-icons right">send</i></a>  </button>
    </div>
  </div>
    </div>
  );
};

export default Rating;
